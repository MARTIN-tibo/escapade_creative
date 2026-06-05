import MultiImage from './MultiImage.jsx';

const techniques = ['Peinture', 'Impressions par empreintes', 'Végétaux', 'Bois flotté', 'Coquillages', 'Patchwork', 'Broderie', 'Lin, chanvre ancien, textiles bruts'];

export default function TextileWorkshopSection({ onBook }) {
  return (
    <section className="section textile-section" id="ateliers-textile" aria-labelledby="textile-title">
      <div className="container split-panel reverse">
        <div className="panel-copy">
          <p className="eyebrow">Art textile</p>
          <h2 id="textile-title">Atelier Tentures de Joie</h2>
          <p>Pendant l’escapade, Stéphanie Mensah vous accompagne pour maîtriser les formes et les couleurs et réaliser en quatre jours une pièce unique qui vous ressemble.</p>
          <p>Les matériaux ramassés pendant les promenades en forêt et à l’océan deviennent des points de départ : végétaux, bois flotté, coquillages, formes et textures du Bassin.</p>
          <div className="tag-list">{techniques.map((technique) => <span key={technique}>{technique}</span>)}</div>
          <button className="btn btn-secondary-dark" onClick={() => onBook({ requestType: 'Atelier ponctuel', message: 'Je souhaite savoir quels ateliers textile sont ouverts aux personnes extérieures.' })}>Participer à un atelier</button>
        </div>
        <div className="image-frame"><MultiImage name="atelier-textile.jpg" alt="Atelier textile naturel avec impressions botaniques et fibres brutes au Pyla-sur-Mer" /></div>
      </div>
    </section>
  );
}
