import { asset, fallbackAsset } from './utils.js';

export default function ImageWithFallback({ name, alt = '', ...props }) {
  const fallback = fallbackAsset(name);

  return (
    <img
      src={asset(name)}
      alt={alt}
      onError={(event) => {
        if (!fallback || event.currentTarget.dataset.fallbackApplied === 'true') return;
        event.currentTarget.dataset.fallbackApplied = 'true';
        event.currentTarget.src = fallback;
      }}
      {...props}
    />
  );
}
