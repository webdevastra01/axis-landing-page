import { Helmet } from "react-helmet-async";
import AboutSection from "./components/AboutSection";
import ContactSection from "./components/ContactSection";
import DifferentiationSection from "./components/DifferentiationSection";
import FinalConversionSection from "./components/FinalConversionSection";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import NavigationBar from "./components/NavigationBar";
import OfferSection from "./components/OfferSection";
import ProblemSection from "./components/ProblemSection";
import ProcessSection from "./components/ProcessSection";
import SalesCTA from "./components/SalesCTA";
import ServicesSection from "./components/ServicesSection";
import SolutionSection from "./components/SolutionSection";
import { Route, Routes } from "react-router-dom";
import Works from "./components/Works";
import CaseStudyPageIhub from "./components/CaseStudiesIhub";
import CaseStudyPageJmave from "./components/CaseStudyJMave";
import CaseStudiesHub from "./components/CaseStudies";
import CaseStudyPageFitmd from "./components/CaseStudiesFitmd";
import { useEffect } from "react";

export default function App() {
  useEffect(() => {
    if (window.location.hash) {
      const sectionId = window.location.hash.replace("#", "");
      const element = document.getElementById(sectionId);
      if (element) {
        const offset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    }
  }, []);

  return (
    <>
      <Helmet>
        <title>
          Axis Marketing Solutions | Strategic Marketing That Converts
        </title>

        <meta
          name="description"
          content="Axis Marketing Solutions helps businesses grow through strategic branding, content, and marketing systems that turn attention into real customers."
        />

        <meta
          name="keywords"
          content="marketing agency Philippines, social media marketing Davao, branding services, paid ads, content marketing"
        />

        <meta
          property="og:title"
          content="Axis Marketing Solutions | Turn Attention Into Customers"
        />

        <meta
          property="og:description"
          content="We build marketing systems that attract, engage, and convert. Stop guessing. Start growing."
        />

        <meta property="og:type" content="website" />

        <meta property="og:url" content="https://axis.astragroupph.com/" />
      </Helmet>

      <Routes>
        {/* Home / Landing Page */}
        <Route
          path="/"
          element={
            <>
              <NavigationBar />
              <div style={{ height: "80px" }} />
              <HeroSection />
              <ProblemSection />
              <SolutionSection />
              <SalesCTA />
              <ServicesSection />
              <OfferSection />
              <ProcessSection />
              <AboutSection />
              <DifferentiationSection />
              <FinalConversionSection />
              <ContactSection />
              <Footer />
            </>
          }
        />
        <Route
          path="/works"
          element={
            <>
              <NavigationBar />
              <Works />
              <Footer />
            </>
          }
        />
        <Route
          path="/case-studies"
          element={
            <>
              <NavigationBar />
              <CaseStudiesHub />
              <Footer />
            </>
          }
        />
        <Route
          path="/case-studies/ihub-davao"
          element={
            <>
              <NavigationBar />
              <CaseStudyPageIhub />
              <Footer />
            </>
          }
        />
        <Route
          path="/case-studies/j-mave"
          element={
            <>
              <NavigationBar />
              <CaseStudyPageJmave />
              <Footer />
            </>
          }
        />
        <Route
          path="/case-studies/fitmd"
          element={
            <>
              <NavigationBar />
              <CaseStudyPageFitmd />
              <Footer />
            </>
          }
        />
      </Routes>
    </>
  );
}
