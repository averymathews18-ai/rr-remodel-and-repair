import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { FilmSection } from "@/components/FilmSection";
import { StatsBar } from "@/components/StatsBar";
import { Services } from "@/components/Services";
import { Showcase } from "@/components/Showcase";
import { Process } from "@/components/Process";
import { RecentWork } from "@/components/RecentWork";
import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { CallBar } from "@/components/CallBar";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <FilmSection />
        <StatsBar />
        <Services />
        <Showcase />
        <Process />
        <RecentWork />
        <About />
        <Contact />
      </main>
      <Footer />
      <CallBar />
    </>
  );
}
