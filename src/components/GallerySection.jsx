import MultiImage from './MultiImage.jsx';

const images = [
  ['bassin-arcachon.jpg', 'Lumière du Bassin d’Arcachon pendant le séjour créatif'],
  ['foret-pins.jpg', 'Forêt de pins au Pyla-sur-Mer près de Vermont'],
  ['impression-botanique.jpg', 'Impression botanique sur textile avec végétaux et fibres naturelles'],
  ['huitres-bassin.jpg', 'Dégustation d’huîtres chez un ostréiculteur sur le Bassin d’Arcachon'],
  ['cuisine-marche.jpg', 'Cuisine de marché conviviale pendant l’Escapade Créative'],
  ['atelier-textile.jpg', 'Atelier textile naturel animé par Stéphanie Mensah']
];

export default function GallerySection() {
  return (
    <section className="section gallery-section" aria-labelledby="gallery-title">
      <div className="container">
        <div className="section-heading centered">
          <p className="eyebrow">Ambiances</p>
          <h2 id="gallery-title">Dune, forêt, textile, cuisine et esprit Bassin</h2>
        </div>
        <div className="gallery-grid">
          {images.map(([file, alt]) => <figure key={file}><MultiImage name={file} alt={alt} /><figcaption>{alt}</figcaption></figure>)}
        </div>
      </div>
    </section>
  );
}
