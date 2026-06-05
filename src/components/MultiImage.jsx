import { useEffect, useMemo, useState } from 'react';
import { asset, imageCandidates } from './utils.js';

export default function MultiImage({ name, alt = '', className = '', autoPlay = true }) {
  const candidates = useMemo(() => imageCandidates(name), [name]);
  const [images, setImages] = useState([]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    let cancelled = false;
    setImages([]);
    setIndex(0);

    Promise.all(
      candidates.map((candidate) => new Promise((resolve) => {
        const image = new Image();
        image.onload = () => resolve(candidate);
        image.onerror = () => resolve(null);
        image.src = asset(candidate);
      }))
    ).then((loaded) => {
      if (!cancelled) setImages(loaded.filter(Boolean));
    });

    return () => {
      cancelled = true;
    };
  }, [candidates]);

  useEffect(() => {
    if (!autoPlay || images.length < 2) return undefined;
    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % images.length);
    }, 4200);
    return () => window.clearInterval(timer);
  }, [autoPlay, images.length]);

  if (!images.length) {
    return <div className={`media-placeholder ${className}`} role="img" aria-label={alt || 'Image à ajouter'}><span>Photo à ajouter</span></div>;
  }

  const current = images[index];

  return (
    <div className={`media-carousel ${className}`} data-count={images.length}>
      <img src={asset(current)} alt={alt} />
      {images.length > 1 && (
        <>
          <button className="media-arrow prev" type="button" aria-label="Photo précédente" onClick={() => setIndex((index - 1 + images.length) % images.length)}>‹</button>
          <button className="media-arrow next" type="button" aria-label="Photo suivante" onClick={() => setIndex((index + 1) % images.length)}>›</button>
          <div className="media-dots" aria-label={`${images.length} photos disponibles`}>
            {images.map((image, dotIndex) => (
              <button
                key={image}
                type="button"
                className={dotIndex === index ? 'active' : ''}
                aria-label={`Afficher la photo ${dotIndex + 1}`}
                aria-current={dotIndex === index ? 'true' : undefined}
                onClick={() => setIndex(dotIndex)}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
