import MultiImage from './MultiImage.jsx';

export default function StephanieSection() {
  return (
    <section className="section artist-section" aria-labelledby="stephanie-title">
      <div className="container split-panel">
        <div className="image-frame portrait"><MultiImage name="stephanie-mensah.jpg" alt="Portrait de Stéphanie Mensah, artiste textile Stephie M design" /></div>
        <div className="panel-copy">
          <p className="eyebrow">Artiste invitée</p>
          <h2 id="stephanie-title">Stéphanie Mensah — artiste textile</h2>
          <p>Artiste textile formée aux Beaux-Arts d’Avignon, Stéphanie Mensah crée des œuvres vibrantes sur fibres naturelles, notamment le lin et le chanvre ancien. Experte en empreintes végétales et peinture sur textile, elle utilise les plantes comme tampons pour capturer la poésie de la nature. Ses ateliers sont une invitation au flow créatif.</p>
          <div className="link-list">
            <a href="http://stephiemdesign.wixsite.com" target="_blank" rel="noreferrer">Site web de Stéphanie</a>
            <a href="https://www.instagram.com/stephie.m_design/" target="_blank" rel="noreferrer">Instagram @stephie.m_design</a>
            <a href="tel:+34639933702">+34 639 933 702</a>
            <a href="mailto:stephanie26mh@icloud.com">stephanie26mh@icloud.com</a>
          </div>
        </div>
      </div>
    </section>
  );
}
