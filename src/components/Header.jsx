import { useState } from 'react';

export default function Header({ onBook }) {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);
  const reserveRetreat = () => {
    close();
    onBook({ requestType: 'Escapade complète', message: 'Je souhaite recevoir les informations et disponibilités pour l’Escapade Créative.' });
  };
  const reserveWorkshop = () => {
    close();
    onBook({ requestType: 'Atelier ponctuel', message: 'Je souhaite participer à un atelier ponctuel d’impression botanique.' });
  };

  return (
    <header className="site-header">
      <nav className="nav container" aria-label="Navigation principale">
        <a className="brand" href="#top" onClick={close}>
          <span className="brand-mark" aria-hidden="true">☀</span>
          <span><strong>Escapade Créative</strong><small>Pyla-sur-Mer · Vermont</small></span>
        </a>
        <button className="nav-toggle" type="button" aria-expanded={open} aria-controls="nav-menu" onClick={() => setOpen(!open)}>
          <span className="sr-only">Ouvrir le menu</span><span></span><span></span><span></span>
        </button>
        <div className={`nav-menu ${open ? 'is-open' : ''}`} id="nav-menu">
          <a onClick={close} href="#escapade">L’escapade</a>
          <a onClick={close} href="#programme">Programme</a>
          <a onClick={close} href="#ateliers-textile">Ateliers textile</a>
          <a onClick={close} href="#maison">La maison</a>
          <a onClick={close} href="#chambres">Chambres & tarifs</a>
          <button className="link-button secondary-link" onClick={reserveWorkshop}>Participer à un atelier</button>
          <button className="nav-cta" onClick={reserveRetreat}>Réserver l’escapade</button>
        </div>
      </nav>
    </header>
  );
}
