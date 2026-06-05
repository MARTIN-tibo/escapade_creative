const days = [
  ['Jour 1 — Arrivée et installation', ['Accueil à Vermont', 'Présentation du séjour', 'Dîner de bienvenue', 'Première immersion dans l’esprit Bassin']],
  ['Jour 2 — Inspiration nature', ['Balade en forêt ou près de l’océan', 'Collecte d’inspirations : végétaux, formes, couleurs, textures', 'Introduction à l’impression botanique sur textile', 'Repas de marché']],
  ['Jour 3 — Atelier textile', ['Travail des formes et des couleurs', 'Empreintes végétales', 'Composition textile', 'Temps libre, baignade ou coucher de soleil']],
  ['Jour 4 — Masterclasse créativité', ['Masterclasse avec Hélène', 'L’art de la curiosité', 'Le remix créatif', 'Passer à l’action', 'Poursuite de la création textile']],
  ['Jour 5 — Bassin d’Arcachon et finalisation', ['Visite ou balade autour du Bassin', 'Rencontre avec un ostréiculteur', 'Dégustation d’huîtres', 'Finalisation des pièces textiles']],
  ['Jour 6 — Partage et départ', ['Présentation des créations', 'Brunch ou repas de clôture', 'Départ']]
];

export default function ProgramSection() {
  return (
    <section className="section program-section" id="programme" aria-labelledby="program-title">
      <div className="container">
        <div className="section-heading centered">
          <p className="eyebrow">Programme type</p>
          <h2 id="program-title">Six jours pour explorer, créer et partager</h2>
          <p>Le déroulé pourra être ajusté selon la météo, les marées et le rythme du groupe, afin de préserver la qualité de l’expérience.</p>
        </div>
        <div className="program-list">
          {days.map(([title, items]) => (
            <article key={title} className="program-card">
              <h3>{title}</h3>
              <ul>{items.map((item) => <li key={item}>{item}</li>)}</ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
