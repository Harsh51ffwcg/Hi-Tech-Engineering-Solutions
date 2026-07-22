import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import Projects from "@/components/sections/projects";
import Process from "@/components/sections/Process";
import Industries from "@/components/sections/Industries";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
  <>
  <Navbar />
  <Hero />
  <About />
  <Services />
  <Projects />
  <Process />
<Industries />
<Contact />
<Footer />
</>
  );
}