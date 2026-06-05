const retreatFaq = [
  ['À qui s’adresse l’escapade créative ?', 'À des adultes qui souhaitent vivre une semaine créative, sensible et conviviale au Pyla-sur-Mer, sans obligation d’avoir une pratique artistique avancée.'],
  ['Faut-il avoir une pratique artistique ?', 'Non. Les ateliers sont accompagnés progressivement et restent accessibles aux débutants curieux.'],
  ['Que comprend le prix ?', 'L’hébergement, les repas, les ateliers, les masterclasses et les visites prévues pendant le séjour.'],
  ['Les repas sont-ils inclus ?', 'Oui, avec une cuisine de marché préparée par Hélène où les légumes et les fruits tiennent la vedette.'],
  ['Les visites sont-elles incluses ?', 'Oui, les visites prévues au programme sont incluses dans le tarif du séjour.'],
  ['Les transports jusqu’au lieu sont-ils inclus ?', 'Non, les frais de déplacement jusqu’au lieu d’hébergement ne sont pas compris.'],
  ['Comment sont attribuées les chambres ?', 'Les chambres sont attribuées selon le principe du premier arrivé, premier servi.'],
  ['Comment confirmer sa réservation ?', 'La réservation est confirmée après échange avec Hélène et paiement d’un acompte de 50 %.'],
  ['Quel acompte faut-il verser ?', 'Un acompte de 50 % est prévu pour confirmer la réservation. Les modalités exactes restent à préciser.'],
  ['Peut-on venir seul(e) ?', 'Oui, plusieurs chambres et tarifs solo sont prévus.'],
  ['Peut-on venir à deux ?', 'Oui, plusieurs chambres proposent des tarifs duo par personne.'],
  ['Que faut-il apporter ?', 'La liste précise sera confirmée avant le séjour, notamment selon le matériel textile fourni.'],
  ['Où se situe exactement Vermont ?', 'À Pyla-sur-Mer, dans le quartier de la Co(o)rniche, à proximité de la Dune du Pyla. L’adresse exacte sera communiquée aux participants.'],
  ['Comment venir depuis Bordeaux ?', 'L’aéroport de Bordeaux est à environ 60 km, la gare TGV de Bordeaux à 70 km, la gare de La Teste-de-Buch à 9,5 km et la gare d’Arcachon à 11 km.'],
  ['Que se passe-t-il en cas d’annulation ?', 'Les conditions d’annulation sont à confirmer et seront communiquées avant validation de la réservation.']
];

const workshopFaq = [
  ['Peut-on participer à un atelier sans réserver le séjour ?', 'Oui, certaines sessions peuvent être ouvertes aux personnes extérieures selon les disponibilités.'],
  ['Combien dure un atelier ?', 'Un atelier ponctuel dure 3 heures.'],
  ['Quel est le prix d’un atelier ponctuel ?', 'Le tarif est de 85 € par personne.'],
  ['Le café et le thé sont-ils inclus ?', 'Oui, café et thé sont inclus.'],
  ['Quels sont les horaires ?', 'Les créneaux possibles sont 10h-13h ou 15h-18h.'],
  ['Le matériel est-il fourni ?', 'Le matériel fourni reste à confirmer précisément.'],
  ['Peut-on venir débutant ?', 'Oui, aucun prérequis technique n’est nécessaire.'],
  ['Peut-on réserver pour plusieurs personnes ?', 'Oui, indiquez le nombre de participants dans votre demande.']
];

function FaqGroup({ title, items }) {
  return <div className="faq-group"><h3>{title}</h3>{items.map(([question, answer]) => <details key={question}><summary>{question}</summary><p>{answer}</p></details>)}</div>;
}

export default function FAQ() {
  return (
    <section className="section faq-section" aria-labelledby="faq-title">
      <div className="container">
        <div className="section-heading centered">
          <p className="eyebrow">FAQ</p>
          <h2 id="faq-title">Questions fréquentes</h2>
        </div>
        <div className="faq-columns">
          <FaqGroup title="FAQ Escapade" items={retreatFaq} />
          <FaqGroup title="FAQ Ateliers ponctuels" items={workshopFaq} />
        </div>
      </div>
    </section>
  );
}
