import Hero from './components/HomePageComponents/HeroSection';
import About from './components/HomePageComponents/AboutUsSection';
import Classes from './components/HomePageComponents/ClassesSection';
import Team from './components/HomePageComponents/TeamSection';
import Membership from './components/HomePageComponents/MembershipSection';
import Testimonials from './components/HomePageComponents/TestimonialsSection';
import Faq from './components/HomePageComponents/FAQSection/Faq';
import Blogs from './components/HomePageComponents/BlogSection';
import Brands from './components/HomePageComponents/PartnersSection';
import Header from './components/HomePageComponents/Header';

const Home = () => {
  return (
    <>
      <Header />
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
    </>
  );
};

export default Home;
