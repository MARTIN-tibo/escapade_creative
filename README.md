# Escapade Créative — Pyla-sur-Mer

Site vitrine responsive en React + Vite pour présenter une escapade créative au pied de la Dune du Pyla, avec une offre principale de séjour complet et une offre secondaire d’ateliers ponctuels d’impression botanique sur textile.

## Structure des fichiers

```text
.
├── index.html
├── package.json
├── vite.config.js
├── vercel.json
├── public/
│   └── images/
│       └── README.md
└── src/
    ├── App.jsx
    ├── main.jsx
    ├── styles.css
    ├── components/
    │   ├── Header.jsx
    │   ├── Hero.jsx
    │   ├── ConceptSection.jsx
    │   ├── UniqueExperienceSection.jsx
    │   ├── ProgramSection.jsx
    │   ├── TextileWorkshopSection.jsx
    │   ├── StephanieSection.jsx
    │   ├── HeleneSection.jsx
    │   ├── MasterclassSection.jsx
    │   ├── VermontSection.jsx
    │   ├── GallerySection.jsx
    │   ├── RoomsPricingSection.jsx
    │   ├── StandaloneWorkshopSection.jsx
    │   ├── DatesSection.jsx
    │   ├── BookingForm.jsx
    │   ├── FAQ.jsx
    │   ├── Footer.jsx
    │   └── utils.js
    └── data/
        ├── retreatSessions.json
        ├── workshopSessions.json
        └── rooms.json
```

## Lancer le site localement

Installer les dépendances :

```bash
npm install
```

Lancer le serveur de développement :

```bash
npm run dev
```

Créer une version de production :

```bash
npm run build
```

Prévisualiser la version de production :

```bash
npm run preview
```

## Publication GitHub

1. Créer un dépôt GitHub.
2. Pousser le code sur la branche principale.
3. Vérifier que `package.json`, `vite.config.js`, `vercel.json`, `src/` et `public/` sont bien présents.

## Publication Vercel

Le projet est configuré pour Vercel avec `vercel.json`.

- Framework : Vite.
- Build command : `npm run build`.
- Output directory : `dist`.

Si un ancien projet Vercel affichait `404: NOT_FOUND`, vérifier dans **Settings > Build & Development Settings** que le dossier de sortie est bien `dist`, puis relancer un déploiement.

## Publication Netlify

- Build command : `npm run build`.
- Publish directory : `dist`.

## Publication GitHub Pages

Le fichier `vite.config.js` utilise `base: './'`, ce qui rend les chemins compatibles avec un sous-dossier GitHub Pages.

1. Lancer `npm run build`.
2. Publier le dossier `dist` via GitHub Actions ou une branche dédiée.

## Modifier les prochaines dates d’escapade

Les sessions complètes sont dans `src/data/retreatSessions.json`.

Champs principaux :

- `id` : identifiant unique.
- `title` : nom affiché.
- `startDate` et `endDate` : dates au format `YYYY-MM-DD`.
- `status` : `available`, `soon` ou `closed`.
- `placesRemaining` : nombre de places restantes.

## Modifier les ateliers ponctuels

Les ateliers ponctuels sont dans `src/data/workshopSessions.json`.

Champs principaux :

- `id` : identifiant unique.
- `date` : date au format `YYYY-MM-DD`.
- `label` : libellé affiché.
- `time` : créneau, par exemple `10h - 13h`.
- `price` : prix en euros.
- `available` : `true` ou `false`.
- `remainingPlaces` : nombre de places restantes.

## Modifier les chambres et tarifs

Les chambres sont dans `src/data/rooms.json`.

Chaque chambre contient :

- `name` : nom de la chambre.
- `image` : nom du fichier dans `public/images`.
- `description` : texte de présentation.
- `rates` : liste des tarifs solo, duo ou trio.

## Modifier les coordonnées

Les coordonnées principales sont dans :

- `src/components/BookingForm.jsx` pour Hélène, le téléphone, WhatsApp et l’email.
- `src/components/Footer.jsx` pour le footer.
- `src/components/StephanieSection.jsx` pour Stéphanie Mensah.

## Images à ajouter

Les images finales doivent être placées dans `public/images` avec les noms listés dans `public/images/README.md`.

## Plusieurs photos par emplacement

Chaque emplacement image peut afficher une seule photo ou un carrousel automatique. Pour ajouter plusieurs images, utilisez le même nom de base avec un suffixe `_00`, `_01`, `_02`, etc.

Exemple pour l’image hero :

```text
public/images/hero-dune-pyla_00.jpg
public/images/hero-dune-pyla_01.jpg
public/images/hero-dune-pyla_02.jpg
```

Le site cherche automatiquement les fichiers de `_00` à `_12`, puis le fichier sans suffixe, par exemple `hero-dune-pyla.jpg`. Si aucune photo n’existe encore, un placeholder propre “Photo à ajouter” est affiché.


## Informations encore à confirmer

- Dates exactes des prochaines sessions.
- Nombre de places final.
- Adresse exacte à afficher ou non.
- Conditions d’annulation.
- Modalités de paiement de l’acompte.
- Matériel fourni.
- Photos finales.
- Mentions légales et politique de confidentialité.
