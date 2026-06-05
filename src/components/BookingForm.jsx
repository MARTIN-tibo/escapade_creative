const helenePhone = '+33610281739';
const heleneDisplayPhone = '+33 6 10 28 17 39';
const heleneEmail = 'Lnhuret33@gmail.com';

function whatsAppIntro(type) {
  if (type === 'Atelier ponctuel') return 'Bonjour Hélène, je souhaite réserver un atelier d’impression botanique sur textile au Pyla-sur-Mer. Pouvez-vous me confirmer les disponibilités ?';
  return 'Bonjour Hélène, je souhaite recevoir des informations ou réserver l’Escapade Créative au Pyla-sur-Mer. Pouvez-vous me confirmer les disponibilités ?';
}

export default function BookingForm({ booking, setBooking }) {
  const update = (field, value) => setBooking((current) => ({ ...current, [field]: value }));
  const buildMessage = (formData) => {
    const firstName = formData?.get('firstName') || '';
    const lastName = formData?.get('lastName') || '';
    const email = formData?.get('email') || '';
    const phone = formData?.get('phone') || '';
    return [
      whatsAppIntro(booking.requestType),
      `Nom : ${firstName} ${lastName}`.trim(),
      email ? `Email : ${email}` : '',
      phone ? `Téléphone : ${phone}` : '',
      `Type de demande : ${booking.requestType}`,
      `Session souhaitée : ${booking.session || 'à définir'}`,
      booking.requestType === 'Escapade complète' ? `Chambre souhaitée : ${booking.room || 'à définir'}` : '',
      `Nombre de personnes : ${booking.people || 1}`,
      booking.message ? `Message : ${booking.message}` : ''
    ].filter(Boolean).join('\n');
  };
  const whatsappUrl = `https://wa.me/${helenePhone.replace('+', '')}?text=${encodeURIComponent(buildMessage())}`;

  return (
    <section className="section booking-section" id="reservation" aria-labelledby="booking-title">
      <div className="container booking-grid">
        <div className="booking-copy">
          <p className="eyebrow">Réservation</p>
          <h2 id="booking-title">Envoyer une demande</h2>
          <p>Le formulaire prépare une demande simple par email ou WhatsApp. Aucun paiement en ligne n’est activé pour cette première version : l’acompte de 50 % et les modalités seront confirmés ensuite par Hélène.</p>
          <div className="contact-actions">
            <a className="btn btn-primary" href={`tel:${helenePhone}`}>Appeler Hélène</a>
            <a className="btn btn-whatsapp" href={whatsappUrl} target="_blank" rel="noreferrer">Contacter par WhatsApp</a>
          </div>
          <p className="contact-line">Hélène Huret · {heleneDisplayPhone}<br /><a href={`mailto:${heleneEmail}`}>{heleneEmail}</a></p>
        </div>
        <form className="booking-form" onSubmit={(event) => {
          event.preventDefault();
          const formData = new FormData(event.currentTarget);
          const mailto = `mailto:${heleneEmail}?subject=${encodeURIComponent(`Demande — ${booking.requestType}`)}&body=${encodeURIComponent(buildMessage(formData))}`;
          window.location.href = mailto;
        }}>
          <div className="form-row"><label htmlFor="lastName">Nom</label><input id="lastName" name="lastName" autoComplete="family-name" required /></div>
          <div className="form-row"><label htmlFor="firstName">Prénom</label><input id="firstName" name="firstName" autoComplete="given-name" required /></div>
          <div className="form-row"><label htmlFor="email">Email</label><input id="email" name="email" type="email" autoComplete="email" required /></div>
          <div className="form-row"><label htmlFor="phone">Téléphone</label><input id="phone" name="phone" type="tel" autoComplete="tel" /></div>
          <div className="form-row"><label htmlFor="requestType">Type de demande</label><select id="requestType" name="requestType" value={booking.requestType} onChange={(event) => update('requestType', event.target.value)}><option>Escapade complète</option><option>Atelier ponctuel</option><option>Demande d’information</option></select></div>
          <div className="form-row"><label htmlFor="session">Session souhaitée</label><input id="session" name="session" value={booking.session} onChange={(event) => update('session', event.target.value)} placeholder="Date ou session souhaitée" /></div>
          {booking.requestType === 'Escapade complète' && <div className="form-row"><label htmlFor="room">Chambre souhaitée</label><input id="room" name="room" value={booking.room} onChange={(event) => update('room', event.target.value)} placeholder="Ex. Chambre Forêt" /></div>}
          <div className="form-row"><label htmlFor="people">Nombre de personnes</label><input id="people" name="people" type="number" min="1" max="12" value={booking.people} onChange={(event) => update('people', event.target.value)} /></div>
          <div className="form-row full"><label htmlFor="message">Message</label><textarea id="message" name="message" rows="5" value={booking.message} onChange={(event) => update('message', event.target.value)} placeholder="Votre demande, vos contraintes de dates, ou vos questions."></textarea></div>
          <button className="btn btn-primary full" type="submit">Envoyer ma demande</button>
        </form>
      </div>
    </section>
  );
}
