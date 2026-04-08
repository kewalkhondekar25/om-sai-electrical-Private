import TopBar from '../components/TopBar';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Strengths from '../components/Strengths';
import Industries from '../components/Industries';
import Applications from '../components/Applications';
import Certificates from '../components/Certificates';
import Clients from '../components/Clients';
import Footer from '../components/Footer';

export default function Page() {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 selection:bg-electric-teal selection:text-charcoal">
      <TopBar />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Strengths />
        <Industries />
        <Applications />
        <Certificates />
        <Clients />
      </main>
      <Footer />
    </div>
  );
}
