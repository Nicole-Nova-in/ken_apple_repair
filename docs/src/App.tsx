import serviceText from './components/service.txt?raw';
import Hero from './components/Hero';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import Contact from './components/Contact';
import WhatsAppButton from './components/WhatsAppButton';
import Footer from './components/Footer';

function App() {
  const storeName = "KEN APPLE REPAIR";
  const phoneNumber = "+254722444426";
  const whatsappNumber = "254722444426";
  const location = "The Bazaar Plaza along Moi Avenue, 8th Floor Wing A (Suite 806), Moi, Nairobi Area, Kenya";

  return (
    <div className="min-h-screen bg-white">
      <Hero
        storeName={storeName}
        phoneNumber={phoneNumber}
        whatsappNumber={whatsappNumber}
      />
      <Services />
       <pre className="bg-gray-100 p-4 rounded my-4">{serviceText}</pre>

      <WhyChooseUs />
      <Contact
        storeName={storeName}
        phoneNumber={phoneNumber}
        whatsappNumber={whatsappNumber}
        location={location}
      />
      <Footer
        storeName={storeName}
        phoneNumber={phoneNumber}
      />
      <WhatsAppButton phoneNumber={whatsappNumber} />
    </div>
  );
}

export default App;
