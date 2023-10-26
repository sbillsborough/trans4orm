import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Intro from "./components/Intro";
import MadeImg from "./components/MadeImg";
import Pitch from "./components/Pitch";
import OwnTimePackage from "./components/OwnTimePackage";
import OwnTimeOffer from "./components/OwnTimeOffer";
import OffersCards from "./components/offersCards";
import Cards from "./components/Cards";
import FrequentlyAsked from "./components/FrequentlyAsked";
import DropDown from "./components/DropDown";
import FitnessLoop from "./components/FitnessLoop";
import FourCardPanel from "./components/FourCardPanel";
import FooterTop from "./components/FooterTop";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <NavBar />
      <Hero />
      <Intro />
      <MadeImg />
      <Pitch />
      <OwnTimePackage />
      <OffersCards />
      <OwnTimeOffer />
      <Cards />
      <FrequentlyAsked />
      <DropDown />
      <FitnessLoop />
      <FourCardPanel />
      <FooterTop />
    </>
  );
}

export default App;
