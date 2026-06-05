import { useState } from 'react';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import ConceptSection from './components/ConceptSection.jsx';
import UniqueExperienceSection from './components/UniqueExperienceSection.jsx';
import ProgramSection from './components/ProgramSection.jsx';
import TextileWorkshopSection from './components/TextileWorkshopSection.jsx';
import StephanieSection from './components/StephanieSection.jsx';
import HeleneSection from './components/HeleneSection.jsx';
import MasterclassSection from './components/MasterclassSection.jsx';
import VermontSection from './components/VermontSection.jsx';
import GallerySection from './components/GallerySection.jsx';
import RoomsPricingSection from './components/RoomsPricingSection.jsx';
import StandaloneWorkshopSection from './components/StandaloneWorkshopSection.jsx';
import DatesSection from './components/DatesSection.jsx';
import BookingForm from './components/BookingForm.jsx';
import FAQ from './components/FAQ.jsx';
import Footer from './components/Footer.jsx';
import retreatSessions from './data/retreatSessions.json';
import workshopSessions from './data/workshopSessions.json';
import rooms from './data/rooms.json';

const defaultBooking = {
  requestType: 'Escapade complète',
  session: '',
  room: '',
  people: 1,
  message: ''
};

export default function App() {
  const [booking, setBooking] = useState(defaultBooking);

  const prefillBooking = (nextBooking) => {
    setBooking((current) => ({ ...current, ...nextBooking }));
    requestAnimationFrame(() => {
      document.querySelector('#reservation')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  };

  const firstRetreat = retreatSessions.find((session) => session.status !== 'closed');
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Event',
    name: firstRetreat?.title ?? 'Escapade Créative au Pyla-sur-Mer',
    description: 'Séjour créatif au pied de la Dune du Pyla avec hébergement, repas, ateliers textile, masterclasses, balades et visites sur le Bassin d’Arcachon.',
    startDate: firstRetreat?.startDate,
    endDate: firstRetreat?.endDate,
    eventStatus: 'https://schema.org/EventScheduled',
    eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
    location: {
      '@type': 'Place',
      name: 'Vermont',
      address: 'Pyla-sur-Mer, Bassin d’Arcachon, France'
    },
    organizer: {
      '@type': 'Person',
      name: 'Hélène Huret',
      email: 'Lnhuret33@gmail.com',
      telephone: '+33610281739'
    }
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <a className="skip-link" href="#main">Aller au contenu principal</a>
      <Header onBook={prefillBooking} />
      <main id="main">
        <Hero sessions={retreatSessions} onBook={prefillBooking} />
        <ConceptSection />
        <UniqueExperienceSection />
        <ProgramSection />
        <TextileWorkshopSection onBook={prefillBooking} />
        <StephanieSection />
        <HeleneSection />
        <MasterclassSection />
        <VermontSection />
        <GallerySection />
        <RoomsPricingSection rooms={rooms} onBook={prefillBooking} />
        <StandaloneWorkshopSection onBook={prefillBooking} />
        <DatesSection retreatSessions={retreatSessions} workshopSessions={workshopSessions} onBook={prefillBooking} />
        <BookingForm booking={booking} setBooking={setBooking} />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
