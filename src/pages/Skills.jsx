import { motion as m } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { frontend, backend, lang } from "../skills";
import Backend from "../components/Backend";
import Frontend from "../components/Frontend";
import Card from "../ui/Card";
import Language from "../components/Language";

const Skills = ({ onProject }) => {
  const navigate = useNavigate();

  function projectHandler() {
    onProject(true);
    navigate("/projects");
  }

  return (
    <Card>
      <m.div
        className="m-[1.5rem] w-4/5 mx-auto"
        initial={{ x: "100%" }}
        animate={{ x: "0%" }}
        exit={{ opacity: 1 }}
        transition={{ duration: 0.75, ease: "easeOut" }}
      >
        <div className="flex-col mb-10">
          <div className="flex justify-start items-center">
            <div className="rotate-90 w-[4%] bg-alt-text-color h-1"></div>
            <h1 className="text-lg font-semibold text-title-color uppercase">
              Frontend:
            </h1>
          </div>
          <Frontend frontend={frontend} />
        </div>
        <div className="flex-col mb-10">
          <div className="flex justify-start items-center">
            <div className="rotate-90 w-[4%] bg-alt-text-color h-1"></div>
            <h1 className="text-lg font-semibold text-title-color uppercase">
              Backend:
            </h1>
          </div>
          <Backend backend={backend} />
        </div>
        <div className="flex-col">
          <div className="flex justify-start items-center">
            <div className="rotate-90 w-[4%] bg-alt-text-color h-1"></div>
            <h1 className="text-lg font-semibold text-title-color uppercase">
              Programming Languages:
            </h1>
          </div>
          <Language language={lang} />
        </div>
      </m.div>
      <div className="">
        <i
          className="fa fa-caret-left sm:hidden fixed left-4 bottom-[44%] text-7xl text-title-color hover:cursor-pointer hover:animate-none animate-bounce"
          onClick={projectHandler}
        ></i>
      </div>
    </Card>
  );
};

export default Skills;
