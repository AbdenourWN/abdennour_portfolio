import FloatingLaptop from "@/components/ui/floating-laptop";
import AboutMe from "./Components/aboutMe";
import Hero from "./Components/hero";

export default function Home() {
  return (
    <div className="flex flex-col h-full">
      <Hero />
      <AboutMe />
    </div>
  );
}
