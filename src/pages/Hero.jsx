import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion as m } from "framer-motion";

const Hero = ({ onProject }) => {
  const [typedText, setTypedText] = useState("");
  const navigate = useNavigate();
  const text = "Rishav Thapliyal";

  const projectsHandler = () => {
    console.log("hello world");
    onProject(true);
    navigate("../projects", { replace: true });
  };

  useEffect(() => {
    let index = 0;
    const intervalId = setInterval(() => {
      setTypedText(text.slice(0, index));
      index += 1;
      if (index > text.length) {
        clearInterval(intervalId);
      }
    }, 90);
    return () => clearInterval(intervalId);
  }, [text]);

  return (
    <m.div
      className="w-full  mx-auto flex justify-center items-center"
      style={{ height: "76vh" }}
      initial={{ x: "100%" }}
      animate={{ x: "0%" }}
      exit={{ opacity: 1 }}
      transition={{ duration: 0.75, ease: "easeOut" }}
    >
      <div className="flex-col">
        <span className="sm:text-2xl text-5xl text-title-color">Hi,</span>
        <span className="sm:text-2xl text-5xl sm:mr-2 mr-3 text-title-color">
          I'm
        </span>
        <span className="sm:text-2xl text-5xl mb-2 text-alt-text-color">
          {typedText}
        </span>
        <div className="text-center mt-3 mb-4">
          <p className="text-text-color text-2xl sm:text-sm">
            I am a FullStack Web Developer
          </p>
        </div>
        <div className="flex justify-center items-center">
          <img
            src="src\assets\github.png"
            className="hover:cursor-pointer mr-3 object-contain w-10 "
          />
          <img
            src="src\assets\mail.png"
            className="mr-2 hover:cursor-pointer  object-contain w-10"
          />
        </div>

        <div
          className="flex justify-center items-center"
          onClick={projectsHandler}
        >
          <i className="fa fa-caret-right absolute right-10 bottom-[44%] text-7xl text-title-color hover:cursor-pointer hover:animate-none animate-bounce"></i>
          {/* <i className="fa fa-caret-down block  absolute bottom-0  text-7xl text-background-color hover:cursor-pointer hover:animate-none animate-bounce"></i> */}
        </div>
      </div>
    </m.div>
  );
};

export default Hero;
