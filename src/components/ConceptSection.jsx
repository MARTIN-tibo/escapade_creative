import { asset } from './utils.js';

const moments = ['Balades en forêt', 'Balades à l’océan', 'Impression botanique sur textile', 'Visites du Bassin d’Arcachon', 'Masterclasses inspirantes', 'Baignades', 'Dégustation d’huîtres', 'Rencontre avec un ostréiculteur', 'Couchers de soleil', 'Cuisine de marché'];

export default function ConceptSection() {
  return (
    <section className="section concept" id="escapade" aria-labelledby="concept-title">
      <div className="container split-panel">
        <div className="section-heading">
          <p className="eyebrow">L’expérience complète</p>
          <h2 id="concept-title">Nature, créativité et bien-être</h2>
          <p>L’Escapade Créative n’est pas seulement un stage textile : c’est une parenthèse d’une semaine pour retrouver de l’espace, nourrir sa créativité et profiter du Bassin d’Arcachon dans une maison de famille chaleureuse.</p>
          <p>Chaque journée mêle exploration, atelier, cuisine de marché, temps libre et inspirations locales, avec un rythme ajusté selon la météo et l’énergie du groupe.</p>
        </div>
        <div className="image-collage" aria-label="Ambiances de l’escapade créative">
          <img src={asset('bassin-arcachon.jpg')} alt="Lumière du Bassin d’Arcachon pendant une escapade créative au Pyla-sur-Mer" />
          <img src={asset('foret-pins.jpg')} alt="Forêt de pins près de la Dune du Pyla pour une balade inspirante" />
          <img src={asset('cuisine-marche.jpg')} alt="Cuisine de marché conviviale avec fruits et légumes de saison" />
        </div>
      </div>
      <div className="container chip-cloud" aria-label="Moments inclus dans le séjour">
        {moments.map((moment) => <span key={moment}>{moment}</span>)}
      </div>
    </section>
  );
}
