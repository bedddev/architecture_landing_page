import Clients from "../Components/Clients";
import Concepts from "../Components/Concepts";
import Featured from "../Components/Featured";
import Footer from "../Components/Footer";
import Hero from "../Components/Hero";
import Navbar from "../Components/Navbar";
import Projects from "../Components/Projects";
import Step from "../Components/Step";
import ScrollToTop from "react-scroll-to-top";

export default function Home() {
  return (
    <>
      <ScrollToTop smoth color="#14213d" style={{ borderRadius: 0 }} />
      <Navbar />
      <Hero />
      <Featured />
      <Step />
      <Projects />
      <Clients />
      <Concepts />
      <Footer />
    </>
  );
}
