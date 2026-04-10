import HeroSection from "./components/HeroSection";
import NavigationBar from "./components/NavigationBar";

function App() {
  return (
    <>
      <NavigationBar />
      <div style={{ height: "80px" }} /> {/* Spacer to prevent content from being hidden behind navbar */}
      <HeroSection/>
    </>
  );
}

export default App;
