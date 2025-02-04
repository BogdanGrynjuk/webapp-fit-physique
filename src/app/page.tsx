import Hero from './components/HeroSection';
import About from './components/AboutUsSection';
import Blog from './components/BlogSection';
import Classes from './components/ClassesSection';
import Membership from './components/MembershipSection';
import Team from './components/TeamSection';
import Community from './components/CommunitySection';

export default function Home() {
  return (
    <main className="w-full">
      <Hero />
      <About />
      <Classes />
      <Team />
      <Membership />
      <Community />
      <Blog />
    </main>
  );
}
