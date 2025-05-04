import Hero from "../app/components/Hero";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Skills from "./components/Skills";

export default function Home (){
  return (
    <div>
      <Hero />
      <Skills />
      <Contact />
      <Footer />
    </div>
  )
}