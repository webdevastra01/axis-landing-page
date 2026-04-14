import HeroSection from "./components/HeroSection";
import NavigationBar from "./components/NavigationBar";
import ProblemSection from "./components/ProblemSection";

function App() {
  return (
    <>
      <NavigationBar />
      <div style={{ height: "80px" }} />{" "}
      {/* Spacer to prevent content from being hidden behind navbar */}
      <HeroSection />
      <ProblemSection />
    </>
  );
}

export default App;
