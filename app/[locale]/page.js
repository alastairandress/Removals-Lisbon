import Navbar from '../../components/Navbar';
import Hero from '../../components/Hero';
import HowItWorks from '../../components/HowItWorks';
import Services from '../../components/Services';
import Testimonials from '../../components/Testimonials';
import Areas from '../../components/Areas';
import QuoteForm from '../../components/QuoteForm';
import CtaBanner from '../../components/CtaBanner';
import Footer from '../../components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <HowItWorks />
      <Services />
      <Testimonials />
      <Areas />
      <QuoteForm />
      <CtaBanner />
      <Footer />
    </main>
  );
}
