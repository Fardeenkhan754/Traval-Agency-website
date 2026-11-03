import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import SearchTabs from '@/components/SearchTabs';
import Services from '@/components/Services';
import Destinations from '@/components/Destinations';
import Stats from '@/components/Stats';
import Testimonials from '@/components/Testimonials';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';
import Motion from '@/components/Motion';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <SearchTabs />
        <Services />
        <Destinations />
        <Stats />
        <Testimonials />
        <ContactForm />
      </main>
      <Footer />
      <Motion />
    </>
  );
}
