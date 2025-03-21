import Header from '../../sections/Header';
import Footer from '../../sections/Footer';

const Events = () => {
  return (
    <div>
      <Header />
      <main className="container mx-auto p-4">
        <h1 className="text-4xl font-bold text-center my-8">Events</h1>
        <p className="text-lg text-gray-700">
          Join us at upcoming events and workshops to learn more about SugarLabs
          and our mission.
        </p>
      </main>
      <Footer />
    </div>
  );
};

export default Events;
