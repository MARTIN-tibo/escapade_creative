export default function StandaloneWorkshopSection({ onBook }) {
  return (
    <section className="section standalone-section" id="atelier-ponctuel" aria-labelledby="standalone-title">
      <div className="container standalone-card">
        <div>
          <p className="eyebrow">Offre complémentaire</p>
          <h2 id="standalone-title">Participer à un atelier sans réserver tout le séjour</h2>
          <p>Certaines sessions d’impression botanique sur textile peuvent être ouvertes aux personnes extérieures à l’escapade. Une occasion de découvrir l’univers de Stéphanie Mensah le temps d’un atelier de 3 heures au Pyla-sur-Mer.</p>
        </div>
        <div className="workshop-facts">
          <span>Atelier de 3h</span><span>85 €</span><span>Café et thé inclus</span><span>10h-13h ou 15h-18h</span><span>À deux pas de La Co(o)rniche</span><span>Réservation auprès d’Hélène</span>
          <button className="btn btn-secondary-dark full" onClick={() => onBook({ requestType: 'Atelier ponctuel', message: 'Je souhaite connaître les prochaines dates d’ateliers ponctuels.' })}>Participer à un atelier</button>
        </div>
      </div>
    </section>
  );
}
