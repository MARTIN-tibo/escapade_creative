import ImageWithFallback from './ImageWithFallback.jsx';

export default function HeleneSection() {
  return (
    <section className="section helene-section" aria-labelledby="helene-title">
      <div className="container split-panel reverse">
        <div className="panel-copy">
          <p className="eyebrow">Accueil & cuisine</p>
          <h2 id="helene-title">Hélène Huret — créativité, cuisine et art de recevoir</h2>
          <p>Hélène Huret est journaliste, autrice et donne des cours de créativité à l’école Ferrandi. Journaliste culinaire pendant plus de 15 ans, elle est l’autrice du livre <em>Une terrasse, du soleil et des copains</em>. Elle a également tenu un restaurant pendant 4 ans à Palma. Pendant l’escapade, elle s’occupe des repas et propose une cuisine de marché où les légumes et les fruits tiennent la vedette.</p>
          <div className="tag-list"><span>Cuisine de marché</span><span>Repas conviviaux</span><span>Créativité appliquée</span><span>Art de recevoir</span></div>
        </div>
        <div className="image-frame portrait"><ImageWithFallback name="helene-huret.jpg" alt="Portrait d’Hélène Huret, journaliste culinaire et hôte de l’Escapade Créative" /></div>
      </div>
    </section>
  );
}
