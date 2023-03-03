import { useState } from "react";
import Hero from "./pages/Hero";
import NavBar from "./components/Navbar";
import Projects from "./pages/Projects";
import Body from "./ui/Body";
import Skills from "./pages/Skills";
import Description from "./pages/Description";
import Indicator from "./components/Indicator";
import About from "./pages/About";
import Footer from "./components/Footer";

function App() {
  const [active, setActive] = useState({});
  const [trasnparent, setTransparent] = useState(0);
  const links = ["home", "projects", "about", "skill"];

  function colorHandler(val) {
    setTransparent(val);
  }

  function activeHandler(val) {
    setActive(val);
  }

  return (
    <Body>
      <NavBar color={trasnparent} links={links}></NavBar>
      <>
        <Indicator active={active}></Indicator>
        <Hero onNavColor={colorHandler} onActive={activeHandler} />
        <Projects onActive={activeHandler}></Projects>
        <About onActive={activeHandler}></About>
        <Skills onActive={activeHandler}></Skills>
        <Footer></Footer>
      </>
    </Body>
  );
}

export default App;
