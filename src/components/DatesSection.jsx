import { useState } from 'react';
import { formatDateRange, isFutureOrToday, sessionStatus } from './utils.js';

export default function DatesSection({ retreatSessions, workshopSessions, onBook }) {
  const [tab, setTab] = useState('retreats');
  const retreats = retreatSessions.filter((session) => isFutureOrToday(session.endDate));
  const workshops = workshopSessions.filter((session) => isFutureOrToday(session.date));

  return (
    <section className="section dates-section" id="dates" aria-labelledby="dates-title">
      <div className="container">
        <div className="section-heading centered light">
          <p className="eyebrow">Calendrier</p>
          <h2 id="dates-title">Prochaines dates</h2>
          <p>Les dates sont pilotées par fichiers JSON pour garder la page durable et facile à mettre à jour.</p>
        </div>
        <div className="tabs" role="tablist" aria-label="Types de dates">
          <button className={tab === 'retreats' ? 'active' : ''} role="tab" aria-selected={tab === 'retreats'} onClick={() => setTab('retreats')}>Escapades complètes</button>
          <button className={tab === 'workshops' ? 'active' : ''} role="tab" aria-selected={tab === 'workshops'} onClick={() => setTab('workshops')}>Ateliers ponctuels</button>
        </div>
        {tab === 'retreats' ? <RetreatDates sessions={retreats} onBook={onBook} /> : <WorkshopDates sessions={workshops} onBook={onBook} />}
      </div>
    </section>
  );
}

function RetreatDates({ sessions, onBook }) {
  if (!sessions.length) {
    return <Empty message="Les prochaines dates seront annoncées prochainement. Laissez-nous vos coordonnées pour être prévenu." onBook={onBook} />;
  }
  return (
    <div className="date-grid">
      {sessions.map((session) => {
        const status = sessionStatus(session.status, session.placesRemaining);
        return (
          <article className="date-card" key={session.id}>
            <span className={`status ${status.className}`}>{status.label}</span>
            <h3>{session.title}</h3>
            <p>{formatDateRange(session.startDate, session.endDate)}</p>
            <p><strong>{session.placesRemaining} place{session.placesRemaining > 1 ? 's' : ''} restante{session.placesRemaining > 1 ? 's' : ''}</strong></p>
            <button className="btn btn-primary full" disabled={status.className === 'full'} onClick={() => onBook({ requestType: 'Escapade complète', session: `${session.title} — ${formatDateRange(session.startDate, session.endDate)}`, message: `Je souhaite réserver ou recevoir les informations pour ${session.title}.` })}>Réserver l’escapade</button>
          </article>
        );
      })}
    </div>
  );
}

function WorkshopDates({ sessions, onBook }) {
  if (!sessions.length) {
    return <Empty message="Les prochaines dates d’ateliers seront annoncées prochainement. Laissez-nous vos coordonnées pour être prévenu." onBook={onBook} />;
  }
  return (
    <div className="date-grid workshop-date-grid">
      {sessions.map((session) => {
        const status = session.available ? sessionStatus('available', session.remainingPlaces) : sessionStatus('closed', 0);
        return (
          <article className="date-card workshop" key={session.id}>
            <span className={`status ${status.className}`}>{status.label}</span>
            <h3>{session.label}</h3>
            <p>{session.time} · {session.price} €</p>
            <p><strong>{session.remainingPlaces} place{session.remainingPlaces > 1 ? 's' : ''} restante{session.remainingPlaces > 1 ? 's' : ''}</strong></p>
            <button className="btn btn-secondary-dark full" disabled={status.className === 'full'} onClick={() => onBook({ requestType: 'Atelier ponctuel', session: `${session.label} — ${session.time}`, message: `Je souhaite réserver l’atelier ponctuel du ${session.label}, créneau ${session.time}.` })}>Choisir cet atelier</button>
          </article>
        );
      })}
    </div>
  );
}

function Empty({ message, onBook }) {
  return (
    <div className="empty-state">
      <p>{message}</p>
      <button className="btn btn-primary" onClick={() => onBook({ requestType: 'Demande d’information', message: 'Je souhaite être prévenu(e) des prochaines dates.' })}>Être prévenu</button>
    </div>
  );
}
