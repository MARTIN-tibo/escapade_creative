import ImageWithFallback from './ImageWithFallback.jsx';

export default function RoomsPricingSection({ rooms, onBook }) {
  return (
    <section className="section rooms-section" id="chambres" aria-labelledby="rooms-title">
      <div className="container">
        <div className="section-heading centered">
          <p className="eyebrow">Chambres & tarifs</p>
          <h2 id="rooms-title">Choisir sa chambre à Vermont</h2>
          <p>Les prix incluent l’hébergement, les repas, les ateliers et toutes les visites. Ils ne comprennent pas les frais de déplacement jusqu’au lieu d’hébergement. La réservation est confirmée par le paiement d’un acompte de 50 %. Les chambres sont attribuées selon le principe du premier arrivé, premier servi.</p>
        </div>
        <div className="rooms-grid">
          {rooms.map((room) => (
            <article className="room-card" key={room.id}>
              <div className="room-image"><ImageWithFallback name={room.image} alt={`${room.name} à Vermont pour l’Escapade Créative au Pyla-sur-Mer`} /></div>
              <div className="room-content">
                <h3>{room.name}</h3>
                <p>{room.description}</p>
                <ul className="rates">{room.rates.map((rate) => <li key={rate.label}><span>{rate.label}</span><strong>{rate.price}</strong></li>)}</ul>
                <button className="btn btn-secondary-dark full" onClick={() => onBook({ requestType: 'Escapade complète', room: room.name, message: `Je souhaite demander la ${room.name}.` })}>Demander cette chambre</button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
