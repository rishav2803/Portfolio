import { Link } from "react-router-dom";
import "./Project.css";
import "../index";
import Desc from "./Desc";
import { useState } from "react";

const Project = ({ name, tags, f, img, repo }) => {
  const [showModal, setShowModal] = useState(false);


  const modalHandler=(val)=>{
    setShowModal(val);
  }

  return (
    <>
      <div className="relative rounded-lg shadow-2xl sm:p-0 p-0 h-[38vh] sm:h-64 hover:cursor-pointer box ">
        <div className="relative h-full">
          <img
            src={img}
            className="w-full h-full object-cover"
            alt="image"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-overlay opacity-50 z-0"></div>
          <div
            className=" absolute  bg-overlay z-1 px-5 py-5 bottom-0 w-full card cont transition-all ease-in-out"
            onClick={() => setShowModal(true)}
          >
            <h4 className="text-s font-bold  text-title-color ">{name}</h4>
          </div>
        </div>
      </div>
      {showModal && <Desc 
        img={img}
        name={name}
        tags={tags}
        desc={f}
        repo={repo}
        onModal={modalHandler}
      />
      }
    </>
  );
};

export default Project;
