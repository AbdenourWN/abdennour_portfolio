import FloatingLaptop from "@/components/ui/floating-laptop";
import AboutMe from "./Components/aboutMe";
import Hero from "./Components/hero";
import Experience from "./Components/Experience";
import Projects from "./Components/Projects";
import ContactForm from "./Components/ContactForm";

export default function Home() {
  return (
    <div className="flex flex-col h-full">
      <Hero />
      <AboutMe />
      <Experience />
      <Projects />
      <ContactForm />
    </div>
  );
}
