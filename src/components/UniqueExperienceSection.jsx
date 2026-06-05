const cards = [
  { title: 'Le grand air', text: 'La puissance de l’océan Atlantique et la magie d’un coucher de soleil sur la dune pour retrouver sa vitalité.' },
  { title: 'L’expérience Vermont', text: 'Une villa spacieuse ouverte sur la forêt, un refuge paisible et généreux pour déconnecter et profiter du moment présent.' },
  { title: 'Les ateliers suspendus', text: 'Des moments de création hors du temps pour transformer vos inspirations végétales en une œuvre textile unique.' },
  { title: 'L’esprit Bassin', text: 'La poésie des villas d’Arcachon, le calme des plages du bassin et le plaisir d’une dégustation d’huîtres chez l’ostréiculteur.' }
];

export default function UniqueExperienceSection() {
  return (
    <section className="section unique-section" aria-labelledby="unique-title">
      <div className="container">
        <div className="section-heading centered">
          <p className="eyebrow">Ce qui rend le séjour unique</p>
          <h2 id="unique-title">Un équilibre entre création, maison, océan et Bassin</h2>
        </div>
        <div className="feature-grid four">
          {cards.map((card, index) => (
            <article key={card.title}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <h3>{card.title}</h3>
              <p>{card.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
