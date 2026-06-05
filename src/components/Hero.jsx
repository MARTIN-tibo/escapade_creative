import { asset, formatDateRange } from './utils.js';

export default function Hero({ sessions, onBook }) {
  const nextSession = sessions.find((session) => session.status !== 'closed');
  return (
    <section className="hero section" id="top" aria-labelledby="hero-title">
      <div className="hero-bg" aria-hidden="true"><img src={asset('hero-dune-pyla.jpg')} alt="" /></div>
      <div className="container hero-grid">
        <div className="hero-copy">
          <p className="eyebrow">Escapade Créative · au pied de la Dune du Pyla</p>
          <h1 id="hero-title">Escapade créative au pied de la Dune du Pyla</h1>
          <p className="hero-lead">Un séjour dans un cadre exceptionnel pour ralentir, créer et se ressourcer, entre océan, forêt, art textile, cuisine de marché et inspirations du Bassin d’Arcachon.</p>
          <div className="hero-actions">
            <a className="btn btn-primary" href="#dates">Voir les prochaines dates</a>
            <a className="btn btn-secondary" href="#escapade">Découvrir l’expérience</a>
          </div>
        </div>
        <aside className="hero-card" aria-label="Informations clés">
          <p className="card-title">Séjour créatif complet</p>
          <ul className="quick-facts">
            <li><span>Lieu</span><strong>Pyla-sur-Mer, Bassin d’Arcachon</strong></li>
            <li><span>Depuis Bordeaux</span><strong>Aéroport 60 km · Gare TGV 70 km</strong></li>
            <li><span>Inclus</span><strong>Hébergement, repas, ateliers, visites</strong></li>
            <li><span>Prochaine session</span><strong>{nextSession ? formatDateRange(nextSession.startDate, nextSession.endDate) : 'Prochaines dates à venir'}</strong></li>
            <li><span>Disponibilité</span><strong>Places limitées</strong></li>
          </ul>
          <button className="btn btn-primary full" onClick={() => onBook({ requestType: 'Escapade complète', session: nextSession?.title ?? '', message: 'Je souhaite réserver ou recevoir les disponibilités de l’Escapade Créative.' })}>Réserver l’escapade</button>
        </aside>
      </div>
    </section>
  );
}
