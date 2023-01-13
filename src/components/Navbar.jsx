import { useState } from "react";
import { Link } from "react-router-dom";
const NavBar = ({ project, home, skills, onHome, onProject }) => {
  const [showMenu, setShowMenu] = useState(false);

  const clickHandler = (e) => {
    const text = e.currentTarget.innerText;
    if (text === "HOME") {
      onHome(true);
    }
    if (text === "PROJECTS") {
      onProject(true);
    }
  };

  return (
    <nav className="flex justify-between sm:mx-5 items-center mx-14 ">
      <div className="py-6">
        <h1 className="text-title-color font-semibold text-2xl sm:text-base">
          RishavThapliyal
        </h1>
      </div>
      <div className={`py-6 text-3xl text-title-color`}>
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
      </div>
      <ul
        className={`${showMenu === true ? "sm:block" : "sm:hidden"}
       sm:absolute top-14 uppercase flex items-center justify-end
       py-6 sm:flex-col sm:items-center sm:justify-center
       text-title-color left-0 w-full mr-auto  sm:bg-background-color sm:p-5 sm:mt-5 sm:h-[90vh] sm:z-10`}
      >
        <li
          className={`mr-8 sm:w-full sm:mb-4 ${
            home === true ? "bg-alt-background-color p-3 rounded-lg" : ""
          }`}
        >
          <Link to={"/"} onClick={clickHandler}>
            Home
          </Link>
        </li>
        <li
          className={`mr-8 sm:full sm:mb-4 ${
            project === true ? "bg-alt-background-color p-3 rounded-lg" : ""
          }`}
        >
          <Link to={"/projects"} onClick={clickHandler}>
            Projects
          </Link>
        </li>
        <li
          className={`mr-8 sm:full sm:mb-4 ${
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
