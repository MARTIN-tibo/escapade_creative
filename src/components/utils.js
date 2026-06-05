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


export function imageCandidates(name, max = 12) {
  const dotIndex = name.lastIndexOf('.');
  if (dotIndex === -1) return [name];

  const base = name.slice(0, dotIndex);
  const extension = name.slice(dotIndex);
  const numbered = Array.from({ length: max + 1 }, (_, index) => `${base}_${String(index).padStart(2, '0')}${extension}`);

  return [...numbered, name];
}
