const phone = '33610281739';
const baseWhatsAppMessage = 'Bonjour Hélène, je souhaite réserver un atelier d’impression botanique sur textile au Pyla-sur-Mer. Pouvez-vous me confirmer les disponibilités ?';

const navToggle = document.querySelector('[data-nav-toggle]');
const navMenu = document.querySelector('[data-nav-menu]');

navToggle?.addEventListener('click', () => {
  const isOpen = navMenu.classList.toggle('is-open');
  document.body.classList.toggle('nav-open', isOpen);
  navToggle.setAttribute('aria-expanded', String(isOpen));
});

navMenu?.addEventListener('click', (event) => {
  if (event.target.matches('a')) {
    navMenu.classList.remove('is-open');
    document.body.classList.remove('nav-open');
    navToggle?.setAttribute('aria-expanded', 'false');
  }
});

const sessionContainer = document.querySelector('[data-sessions]');
const emptyState = document.querySelector('[data-empty-state]');
const dateInput = document.querySelector('#date');
const slotInput = document.querySelector('#slot');
const messageInput = document.querySelector('#message');
const whatsAppLink = document.querySelector('[data-whatsapp-link]');
const form = document.querySelector('[data-booking-form]');
const formStatus = document.querySelector('[data-form-status]');

function getSlotStatus(slot) {
  if (!slot.available || slot.remainingPlaces === 0) return { label: 'Complet', className: 'full' };
  if (slot.remainingPlaces <= 2) return { label: 'Bientôt complet', className: 'soon' };
  return { label: 'Disponible', className: 'available' };
}

function updateWhatsAppLink(extraMessage = '') {
  const message = extraMessage ? `${baseWhatsAppMessage}\n\n${extraMessage}` : baseWhatsAppMessage;
  if (whatsAppLink) whatsAppLink.href = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}

function selectSlot(session, slot, button) {
  document.querySelectorAll('.slot-button.selected').forEach((item) => item.classList.remove('selected'));
  button.classList.add('selected');
  dateInput.value = session.label;
  slotInput.value = slot.time;
  const addition = `Date souhaitée : ${session.label}\nCréneau souhaité : ${slot.time}`;
  messageInput.value = messageInput.value.trim() ? `${messageInput.value.trim()}\n\n${addition}` : addition;
  updateWhatsAppLink(addition);
  document.querySelector('#reservation').scrollIntoView({ behavior: 'smooth', block: 'start' });
  dateInput.focus({ preventScroll: true });
}

function renderSessions(sessions) {
  const availableSessions = sessions.filter((session) => new Date(`${session.date}T23:59:59`) >= new Date());
  sessionContainer.innerHTML = '';

  if (!availableSessions.length) {
    emptyState.classList.remove('hidden');
    return;
  }

  emptyState.classList.add('hidden');
  availableSessions.forEach((session) => {
    const card = document.createElement('article');
    card.className = 'session-card';
    card.innerHTML = `<h3>${session.label}</h3><p class="session-date">${new Intl.DateTimeFormat('fr-FR', { dateStyle: 'long' }).format(new Date(`${session.date}T12:00:00`))}</p><div class="slot-list"></div>`;
    const slotList = card.querySelector('.slot-list');

    session.slots.forEach((slot) => {
      const status = getSlotStatus(slot);
      const button = document.createElement('button');
      button.type = 'button';
      button.className = 'slot-button';
      button.disabled = status.className === 'full';
      button.innerHTML = `<span><strong>${slot.time}</strong><br><small>${slot.remainingPlaces} place${slot.remainingPlaces > 1 ? 's' : ''} restante${slot.remainingPlaces > 1 ? 's' : ''}</small></span><span class="status ${status.className}">${status.label}</span>`;
      button.addEventListener('click', () => selectSlot(session, slot, button));
      slotList.append(button);
    });

    sessionContainer.append(card);
  });
}

fetch('data/sessions.json')
  .then((response) => {
    if (!response.ok) throw new Error('Impossible de charger le calendrier.');
    return response.json();
  })
  .then(renderSessions)
  .catch(() => {
    emptyState.classList.remove('hidden');
    emptyState.textContent = 'Le calendrier est momentanément indisponible. Contactez Hélène pour connaître les prochaines dates.';
  });

form?.addEventListener('submit', (event) => {
  event.preventDefault();
  const data = new FormData(form);
  const summary = [
    'Bonjour Hélène, je souhaite réserver un atelier d’impression botanique sur textile au Pyla-sur-Mer.',
    `Nom : ${data.get('firstName') || ''} ${data.get('lastName') || ''}`.trim(),
    `Email : ${data.get('email') || ''}`,
    `Téléphone : ${data.get('phone') || ''}`,
    `Date souhaitée : ${data.get('date') || 'à définir'}`,
    `Créneau souhaité : ${data.get('slot') || 'à définir'}`,
    `Nombre de personnes : ${data.get('people') || '1'}`,
    `Message : ${data.get('message') || ''}`,
  ].join('\n');

  const url = `https://wa.me/${phone}?text=${encodeURIComponent(summary)}`;
  window.open(url, '_blank', 'noopener,noreferrer');
  formStatus.textContent = 'Votre demande est prête dans WhatsApp. Si la fenêtre ne s’ouvre pas, appelez Hélène au 06 10 28 17 39.';
});

updateWhatsAppLink();

if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  document.querySelectorAll('.reveal').forEach((element) => observer.observe(element));
} else {
  document.querySelectorAll('.reveal').forEach((element) => element.classList.add('is-visible'));
}
