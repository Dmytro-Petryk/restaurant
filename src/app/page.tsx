"use client";
import Header from '../components/Header';
import Menu from '../components/Menu';
import Gallery from '../components/Gallery';
import Reservation from '../components/Reservation';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import About from '../components/About';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white text-black font-geist-sans">
      <Header />
      <About />
      <Menu />
      <Gallery />
      <Reservation />
      <Contact />
      <Footer />
    </div>
  );
}