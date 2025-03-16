import Header from './components/Layout/Header';
import Hero from './components/HomePageComponents/HeroSection';
import About from './components/HomePageComponents/AboutUsSection';
import Classes from './components/HomePageComponents/ClassesSection';
import Team from './components/HomePageComponents/TeamSection';
import Membership from './components/HomePageComponents/MembershipSection';
import Testimonials from './components/HomePageComponents/TestimonialsSection';
import Faq from './components/HomePageComponents/FAQSection/Faq';
import Blogs from './components/HomePageComponents/BlogSection';
import Brands from './components/HomePageComponents/PartnersSection';

const links = [
  { name: 'home', target: 'hero', offset: -100 },
  { name: 'about us', target: 'about', offset: -100 },
  { name: 'class', target: 'classes', offset: -100 },
  { name: 'team', target: 'team', offset: -100 },
  { name: 'prices', target: 'membership', offset: -100 },
  { name: 'testimonials', target: 'testimonials', offset: -100 },
  { name: 'faq', target: 'faq', offset: -100 },
  { name: 'blog', target: 'blog', offset: -100 },
  { name: 'contact us', target: 'footer', offset: -300 },
];

const Home = () => {
  return (
    <>
      <Header isMainPage links={links} />
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
