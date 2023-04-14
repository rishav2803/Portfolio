import { motion as m } from "framer-motion";
import { frontend, backend, lang } from "../skills";
import Backend from "../components/Backend";
import Frontend from "../components/Frontend";
import Card from "../ui/Card";
import Language from "../components/Language";
import { useEffect } from "react";

const Skills = ({ onProject, onActive }) => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          onActive({ active: "skill" });
        }
      });
    });
    observer.observe(document.querySelector("#skill"));
  }, []);

  return (
    <>
      <m.div
        className=" w-full mx-auto min-h-[100vh] sm:w-[90%] grid items-center sm:mb-10 "
        id="skill"
      >
        <div>
          <div className="mb-[4rem] flex-col text-3xl sm:text-xl font-bold text-title-color w-4/5 mx-auto sm:w-[100%] ">
            <p>SKILLS</p>
            <div className="h-[2.5px] w-[4%] sm:w-[10%] bg-alt-text-color "></div>
          </div>
          <div className="grid sm:gap-[3rem] grid-cols-3 sm:grid-cols-1 sm:grid-row-3">
            <Frontend frontend={frontend} />
            <Backend backend={backend}></Backend>
            <Language language={lang} />
          </div>
        </div>
      </m.div>
    </>
  );
};

export default Skills;
