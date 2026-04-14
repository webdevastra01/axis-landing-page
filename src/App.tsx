import AboutSection from "./components/AboutSection";
import DifferentiationSection from "./components/DifferentiationSection";
import HeroSection from "./components/HeroSection";
import NavigationBar from "./components/NavigationBar";
import ProblemSection from "./components/ProblemSection";
import ProcessSection from "./components/ProcessSection";
import ServicesSection from "./components/ServicesSection";
import SolutionSection from "./components/SolutionSection";

function App() {
  return (
    <>
      <NavigationBar />
      <div style={{ height: "80px" }} />{" "}
      {/* Spacer to prevent content from being hidden behind navbar */}
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <ServicesSection />
      <ProcessSection />
      <AboutSection />
      <DifferentiationSection/>
    </>
  );
}

export default App;
