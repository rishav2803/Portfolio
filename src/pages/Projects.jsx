import { motion as m } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { projects } from "../projects";
import Card from "../ui/Card";
import Project from "../components/Project";

const Projects = ({ onHome, onSkills }) => {
  const navigate = useNavigate();
  function homeHandler() {
    onHome(true);
    navigate("/");
  }

  function skillsHandler() {
    onSkills(true);
    navigate("/skills");
  }

  return (
    <Card>
      {/* This code is for title  */}
      {/* <div>
        <h1 className="uppercase text-title-color text-2xl font-bold border-l-solid border-l-4 border-l-alt-text-color p-2">projects</h1>
      </div> */}
      <m.div
        className="w-4/5 mx-auto  mt-4
        grid sm:grid-rows-6 grid-rows-3 grid-cols-2 sm:grid-cols-1 gap-4"
        initial={{ x: "100%" }}
        animate={{ x: "0%" }}
        exit={{ opacity: 1 }}
        transition={{ duration: 0.75, ease: "easeOut" }}
      >
        {projects.map((project) => {
          return (
            <Project
              key={project.name}
              name={project.name}
              tags={project.tags}
              f={project.features}
              img={project.src}
              repo={project.git}
            />
          );
        })}
        ;
      </m.div>
      <div className="">
        <i
          className="fa fa-caret-left fixed left-4 bottom-[44%] text-7xl text-title-color hover:cursor-pointer hover:animate-none animate-bounce"
          onClick={homeHandler}
        ></i>
        <i
          className="fa fa-caret-right fixed right-4 bottom-[44%] text-7xl text-title-color hover:cursor-pointer hover:animate-none animate-bounce"
          onClick={skillsHandler}
        ></i>
      </div>
    </Card>
  );
};

export default Projects;
