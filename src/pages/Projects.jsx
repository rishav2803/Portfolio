import { useNavigate } from "react-router-dom";
import { projects } from "../projects";
import Card from "../ui/Card";
import Project from "../components/Project";
import { useEffect } from "react";

const Projects = ({ onActive }) => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          onActive({ active: "project" });
        }
      });
    });
    observer.observe(document.querySelector("#projects"));
  }, []);

  return (
    <Card>
      <div className="w-[100%]">
        <div className="flex-col text-3xl font-bold text-title-color mb-[4rem] sm:w-[90%] mx-auto">
          <p>PROJECTS</p>
          <div className="h-[2px] w-[10%] bg-alt-text-color "></div>
        </div>
        <div
          className="w-4/5 sm:w-[90%] mx-auto  mt-4 min-h-screen 
        grid sm:grid-rows-4 grid-rows-2 grid-cols-2 sm:grid-cols-1 gap-4"
          id="projects"
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
        </div>
      </div>
    </Card>
  );
};

export default Projects;
