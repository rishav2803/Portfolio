import { useState, useEffect, useRef } from "react";
import { motion as m } from "framer-motion";

const Hero = ({ onActive, onNavColor }) => {
  const [typedText, setTypedText] = useState("");
  const text = "Rishav Thapliyal";
  const myRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          onActive({ active: "hero" });
          onNavColor(myRef.current.offsetHeight);
        }
      });
    });
    observer.observe(document.querySelector("#home"));
  }, []);

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
      ref={myRef}
      style={{ height: "100vh" }}
      id="home"
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
          <a href="https://github.com/rishav2803" target="_blank">
            <i class="devicon-github-original text-4xl mr-3 sm:text-3xl text-title-color"></i>
          </a>
          <a href="https://www.linkedin.com/feed/" target="_blank">
            <i class="devicon-linkedin-plain text-4xl sm:text-3xl text-title-color"></i>
          </a>
        </div>
      </div>
    </m.div>
  );
};

export default Hero;
