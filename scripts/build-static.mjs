import { cp, mkdir, rm } from 'node:fs/promises';

const dist = new URL('../dist/', import.meta.url);
const rootFiles = ['index.html', 'styles.css', 'script.js'];
const rootDirectories = ['data', 'public'];

await rm(dist, { recursive: true, force: true });
await mkdir(dist, { recursive: true });

for (const file of rootFiles) {
  await cp(new URL(`../${file}`, import.meta.url), new URL(`./${file}`, dist));
}

for (const directory of rootDirectories) {
  await cp(new URL(`../${directory}`, import.meta.url), new URL(`./${directory}`, dist), { recursive: true });
}

console.log('Static site built in dist/');
