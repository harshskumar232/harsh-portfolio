import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Statement from "@/components/Statement";
import Process from "@/components/Process";
import Work from "@/components/Work";
import About from "@/components/About";
import Vlog from "@/components/Vlog";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Statement />
        <Work />
        <Process />
        <About />
        <Vlog />
        <Contact />
      </main>
    </>
  );
}
