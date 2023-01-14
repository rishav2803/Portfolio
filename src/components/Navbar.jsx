import { useState } from "react";
import { Link } from "react-router-dom";
const NavBar = ({ project, home, skills, onHome, onProject, onSkills }) => {
  const [showMenu, setShowMenu] = useState(false);

  const clickHandler = (e) => {
    const text = e.currentTarget.innerText;
    if (text === "HOME") {
      onHome(true);
    }
    if (text === "PROJECTS") {
      onProject(true);
    }
    if (text === "SKILLS") {
      onSkills(true);
    }
  };

  return (
    <nav className="flex justify-between  items-center sm:mx-0 mx-14 ">
      <div className="py-6 sm:hidden">
        <h1 className="text-title-color font-semibold text-2xl ">
          RishavThapliyal
        </h1>
      </div>
      {/* <div className={`py-6 text-3xl text-title-color`}>
        <a
          href="#"
          className={`${showMenu === true ? "sm:hidden" : "sm:block"} hidden`}
          onClick={() => {
            setShowMenu(true);
          }}
        >
          <span>
            <i className="fa fa-bars "></i>
          </span>
        </a>
        <a
          href="#"
          className={`${showMenu === true ? "sm:block" : "sm:hidden"} hidden`}
          onClick={() => {
            setShowMenu(false);
          }}
        >
          <span>
            <i className="fa fa-times"></i>
          </span>
        </a>
      </div> */}

      <ul
        className={`
       uppercase flex items-center justify-end sm:justify-center
       sm:py-3 py-6 
       text-title-color left-0 w-full `}
      >
        <li
          className={`mr-8 sm:mb-2  ${
            home === true ? "bg-alt-background-color p-3 rounded-lg" : ""
          }`}
        >
          <Link to={"/"} onClick={clickHandler}>
            Home
          </Link>
        </li>
        <li
          className={`mr-8  sm:mb-2 ${
            project === true ? "bg-alt-background-color p-3 rounded-lg" : ""
          }`}
        >
          <Link to={"/projects"} onClick={clickHandler}>
            Projects
          </Link>
        </li>
        <li
          className={`mr-8 sm:mb-2 ${
            skills === true ? "bg-alt-background-color p-3 rounded-lg" : ""
          }`}
        >
          <Link to="/skills" onClick={clickHandler}>
            Skills
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
