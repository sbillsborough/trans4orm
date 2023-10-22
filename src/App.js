import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Intro from "./components/Intro";
import MadeImg from "./components/MadeImg";
import Pitch from "./components/Pitch";
import OwnTime from "./components/OwnTime";

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
      <OwnTime />
    </>
  );
}

export default App;
