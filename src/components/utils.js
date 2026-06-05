export const asset = (name) => `${import.meta.env.BASE_URL}images/${name}`;

export function formatDateRange(startDate, endDate) {
  const formatter = new Intl.DateTimeFormat('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' });
  return `Du ${formatter.format(new Date(`${startDate}T12:00:00`))} au ${formatter.format(new Date(`${endDate}T12:00:00`))}`;
}

export function isFutureOrToday(date) {
  return new Date(`${date}T23:59:59`) >= new Date();
}

export function sessionStatus(status, places) {
  if (status === 'closed' || places === 0) return { label: 'Complet', className: 'full' };
  if (status === 'soon' || places <= 3) return { label: 'Bientôt complet', className: 'soon' };
  return { label: 'Disponible', className: 'available' };
}


const commonsImage = (fileName, width = 1800) => `https://commons.wikimedia.org/wiki/Special:Redirect/file/${encodeURIComponent(fileName)}?width=${width}`;

const FALLBACK_IMAGES = {
  'hero-dune-pyla.jpg': commonsImage('Dune du Pilat - Atlantique.jpg', 2200),
  'bassin-arcachon.jpg': commonsImage("Bateau sur le bassin d'Arcachon - Barco en la bahía de Arcachon - Boat on the Bay of Arcachon - 船在阿卡雄湾 - Image Picture Photography (14524210013).jpg", 1800),
  'foret-pins.jpg': commonsImage('Pins des Landes.jpg', 1600),
  'maison-vermont.jpg': commonsImage('Arcachon - Villa Toledo.jpg', 1800),
  'chambre-foret.jpg': commonsImage('Typical French 19th century bedroom.jpg', 1600),
  'chambre-terrasse.jpg': commonsImage('A bedroom.JPG', 1400),
  'huitres-bassin.jpg': commonsImage('Oysters and sausages (Arcachon).jpg', 1600),
  'cuisine-marche.jpg': commonsImage('Légumes du marché.jpg', 1400),
  'atelier-textile.jpg': commonsImage('Sewing table.webp', 1400),
  'impression-botanique.jpg': commonsImage('"Americana Print- Tango-weed" Textile MET 68658.jpg', 1400),
  'stephanie-mensah.jpg': commonsImage('Textile printing block wooden.jpg', 1400),
  'helene-huret.jpg': commonsImage('Légumes du marché.jpg', 1400)
};

export function fallbackAsset(name) {
  return FALLBACK_IMAGES[name] ?? '';
}
