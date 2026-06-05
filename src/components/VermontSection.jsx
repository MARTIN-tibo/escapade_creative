import MultiImage from './MultiImage.jsx';

export default function VermontSection() {
  return (
    <section className="section vermont-section" id="maison" aria-labelledby="vermont-title">
      <div className="container split-panel">
        <div className="image-frame wide"><MultiImage name="maison-vermont.jpg" alt="Maison Vermont au Pyla-sur-Mer face à la forêt de pins" /></div>
        <div className="panel-copy">
          <p className="eyebrow">La maison</p>
          <h2 id="vermont-title">Vermont, une maison de famille face à la forêt</h2>
          <p>Construite dans les années 1930 face à la forêt, Vermont est située dans le quartier très prisé de la Co(o)rniche, à deux pas de l’hôtel Ha(a)ïtza. Ce havre de paix convivial s’ouvre sur la forêt de pins et offre un calme absolu, tout en étant à 2 minutes à pied de la Dune du Pyla et 10 minutes de la plage.</p>
          <ul className="check-list"><li>Maison de famille spacieuse</li><li>Forêt de pins et calme absolu</li><li>Proximité immédiate de la Dune du Pyla</li><li>Plage à quelques minutes</li><li>Aéroport de Bordeaux : 60 km</li><li>Gare d’Arcachon : 11 km</li></ul>
        </div>
      </div>
    </section>
  );
}
