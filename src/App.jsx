import { useState } from "react";
import Hero from "./pages/Hero";
import NavBar from "./components/Navbar";
import Projects from "./pages/Projects";
import { Routes, Route } from "react-router-dom";
import Body from "./ui/Body";
import { AnimatePresence } from "framer-motion";
import Skills from "./pages/Skills";

function App() {
  const [home, setHome] = useState(true);
  const [project, setProject] = useState(false);
  const [skills, setSkills] = useState(false);

  function projectsHandler(val) {
    setProject(val);
    setHome(false);
    setSkills(false);
  }

  function homeHandler(val) {
    setHome(val);
    setSkills(false);
    setProject(false);
  }

  function skillsHandler(val) {
    setSkills(val);
    setHome(false);
    setProject(false);
  }

  return (
    <Body>
      <NavBar
        project={project}
        home={home}
        skills={skills}
        onHome={homeHandler}
        onProject={projectsHandler}
        onSkills={skillsHandler}
      ></NavBar>
      <AnimatePresence initial={false} mode={"wait"}>
        <Routes>
          <Route
            path="/"
            element={<Hero onProject={projectsHandler} />}
          ></Route>
          <Route
            path="/projects"
            element={<Projects onHome={homeHandler} onSkills={skillsHandler} />}
          ></Route>
          <Route
            path="/skills"
            element={<Skills onProject={projectsHandler} />}
          ></Route>
        </Routes>
      </AnimatePresence>
    </Body>
  );
}

export default App;
