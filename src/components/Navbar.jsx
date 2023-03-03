import { useState, useEffect } from "react";
import { Link } from "react-scroll";
const NavBar = ({ color, links }) => {
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    document.addEventListener("scroll", () => {
      setScroll(window.scrollY);
    });
  }, []);

  return (
    <nav
      className={` flex ${
        scroll > color - 100 ? "bg-overlay shadow-lg" : ""
      }  px-8 items-center sm:mx-0  z-10 w-[100%]  fixed sm:py-4`}
    >
      <div className="py-6 sm:hidden">
        <h1 className="text-title-color font-semibold text-2xl ml-7">
          RishavThapliyal
        </h1>
      </div>
      <ul
        className={`
       uppercase flex items-center justify-end sm:justify-center
       sm:py-3 
       text-title-color left-0 w-full font-jetbrains `}
      >
        {links.map((link) => {
          return (
            <li
              className={`mr-8 ml-5 sm:mb-2 hover:cursor-pointer list  ${
                link === true ? "bg-alt-background-color p-3 rounded-lg" : ""
              }`}
            >
              <Link
                to={link}
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
                className="link"
                value={link}
              >
                {link}
              </Link>
            </li>
          );
        })}
      </ul>
      {}
    </nav>
  );
};

export default NavBar;
