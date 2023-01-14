const Project = ({ name, tags, f, img, repo }) => {
  return (
    <div className="relative  rounded-lg shadow-2xl sm:p-0 p-0">
      <div className="relative">
        <img
          src={img}
          className="w-full h-64 object-cover"
          alt="image"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-overlay opacity-50"></div>
      </div>
      <div className="px-5 py-5">
        <h4 className="text-lg font-bold mb-3 text-title-color">{name}</h4>
        <div className="text-sm text-title-color mb-5 flex-col ">
          <div className="flex-col mb-3">
            <h1 className="font-semibold mb-2">Features:</h1>
            {f.map((ft) => {
              return <p>-{ft}</p>;
            })}
          </div>
          <div className="grid grid-cols-3 sm:grid-cols-2 gap-2 grid-rows-1">
            {tags.map((tag) => {
              return (
                <div className="py-2 mr-2 px-4 text-center rounded-lg border-solid border-4 border-alt-background-color">
                  {tag}
                </div>
              );
            })}
          </div>
        </div>
        <button className="bg-title-color text-background-color py-2 px-4 rounded-lg ">
          <a href={repo}>Repository</a>
        </button>
      </div>
    </div>

    // <div classNameName="project">
    //   <div classNameName="relative z-0">
    //     <img
    //       classNameName="w-full h-64 object-cover"
    //       src="src\assets\chatapp.png"
    //       alt=""
    //     />
    //     <div classNameName="absolute inset-0 bg-alt-text-color opacity-50"></div>
    //   </div>
    //   <div classNameName="project_body t">
    //     <p classNameName="project_title">Chat Application</p>
    //     <p>Instant messaging application built using following techstack:</p>
    //     <div classNameName="tech_container">
    //       <p classNameName="tech">ReactJs</p>
    //       <p classNameName="tech">NodeJs(ExpressJs)</p>
    //       <p classNameName="tech">socketio</p>
    //       <p classNameName="tech">mysql</p>
    //     </div>
    //   </div>
    // </div>
  );
};

export default Project;
