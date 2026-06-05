const modules = [
  ['L’art de la curiosité', 'Apprendre à voir ce que les autres ne remarquent plus.'],
  ['Le remix créatif', 'Transformer l’existant pour créer du neuf.'],
  ['Passer à l’action', 'Repartir avec une boîte à outils pour concrétiser ses idées.']
];

export default function MasterclassSection() {
  return (
    <section className="section masterclass-section" aria-labelledby="masterclass-title">
      <div className="container masterclass-card">
        <div>
          <p className="eyebrow">Masterclasse</p>
          <h2 id="masterclass-title">Réveillez votre agilité créative</h2>
          <p>La créativité n’est pas un don réservé à quelques-uns : c’est une compétence qui se cultive. Cette masterclasse donne des outils pour sortir de la routine, briser les blocages et générer des idées avec plus de fluidité.</p>
        </div>
        <div className="module-list">
          {modules.map(([title, text]) => <article key={title}><h3>{title}</h3><p>{text}</p></article>)}
        </div>
      </div>
    </section>
  );
}
