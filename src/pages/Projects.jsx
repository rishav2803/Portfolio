import { motion as m } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { projects } from "../projects";
import Card from "../ui/Card";
import Project from "../components/Project";
import { useState } from "react";

const Projects = ({ onHome, onSkills }) => {
  const [left, setLeft] = useState(false);
  const [right, setRight] = useState(false);
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
      <m.div
        className="w-4/5 sm:w-[90%] mx-auto  mt-4
        grid sm:grid-rows-4 grid-rows-2 grid-cols-2 sm:grid-cols-1 gap-4"
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
          className="fa fa-caret-left sm:hidden fixed left-4 bottom-[44%] text-7xl text-title-color hover:cursor-pointer hover:animate-none animate-bounce"
          onClick={homeHandler}
        ></i>
        <i
          className="fa fa-caret-right fixed  sm:hidden right-4 bottom-[44%] text-7xl text-title-color hover:cursor-pointer hover:animate-none animate-bounce"
          onClick={skillsHandler}
        ></i>
      </div>
    </Card>
  );
};

export default Projects;
