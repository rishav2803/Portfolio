import { useEffect } from "react";
import Card from "../ui/Card";

export default function ({ onActive }) {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          onActive({ active: "about" });
        }
      });
    });
    observer.observe(document.querySelector("#about"));
  }, []);
  return (
    <Card>
      <div
        className="min-h-[50vh] w-full sm:w-[90%] mx-auto mt-[5rem] sm:mb-10"
        id="about"
      >
        <div className="flex-col text-3xl sm:text-xl font-bold text-title-color mb-[4rem] ">
          <p>ABOUT ME</p>
          <div className="h-[2.9px] w-[10%] bg-alt-text-color "></div>
        </div>
        <div className="w-[70%] mx-auto  flex-cols justify-center items-center sm:w-full">
          <p className="leading-10 text-text-color font-jetbrains mb-[2rem] sm:text-s sm:leading-8">
            Hello! My name is{" "}
            <span className="font-bold text-text-color">Rishav Thapliyal</span>,
            and I am a{" "}
            <span className="text-text-color">Full stack developer</span>.I have
            a passion for creating user-friendly and efficient web applications.
            I obtained my Bachelor's degree in Computer Science from Terna
            University, where I gained a solid foundation in programming
            languages such as JavaScript, Python.Since then, I have worked on a
            variety of projects that have allowed me to hone my skills in both
            front-end and back-end technologies. I am proficient in HTML, CSS,
            JavaScript, React, Node.js, and SQL databases. I am also experienced
            in using various tools and frameworks, such as Bootstrap and
            Express.js. Throughout my career, I have worked on a range of
            personal projects and i enjoy the time when i am building a new
            project and learn new things while building the project When I'm not
            coding, I enjoy reading, watching anime, playing video games.
          </p>
        </div>
      </div>
    </Card>
  );
}
