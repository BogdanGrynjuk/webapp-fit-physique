import Hero from './components/HeroSection';
import About from './components/AboutUsSection';
import Classes from './components/ClassesSection';
import Team from './components/TeamSection';
import Membership from './components/MembershipSection';
import Testimonials from './components/TestimonialsSection';
import Faq from './components/FAQSection/Faq';
import Blogs from './components/BlogsSection';
import Brands from './components/BrandsSection';

export default function Home() {
  return (
    <main className="w-full">
      <Hero />
      <About />
      <Classes />
      <Team />
      <Membership />
      <Testimonials />
      <Faq />
      <Blogs />
      <Brands />
    </main>
  );
}
