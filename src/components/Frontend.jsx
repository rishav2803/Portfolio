const Frontend = ({ frontend }) => {
  return (
    <div className=" flex justify-center items-center flex-col sm:mt-0">
      <div className="flex-col text-3xl font-bold text-title-color">
        <p>FRONT END</p>
        <div className="h-[2px] w-[50%] bg-alt-text-color mx-auto"></div>
      </div>
      <div className="text-title-color grid grid-cols-2 sm:grid-cols-3 gap-[3rem] mt-8 ">
        {frontend.map((f) => {
          return (
            <div className="text-center">
              <i className={`${f.src}  text-5xl sm:text-4xl mb-2`}></i>
              <p className="font-jetbrains">{f.name}</p>
            </div>
          );
        })}
      </div>
    </div>
    // <div className="gap-3 my-5 ml-3 grid grid-cols-5 grid-rows-1 sm:grid-rows-3 sm:grid-cols-2 text-center">
    //   {frontend.map((f) => {
    //     return (
    //       <div className="flex justify-center items-center border-solid border-2 border-alt-background-color py-2 rounded-lg text-background-color">
    //         <i className={`${f.src} text-2xl sm:text-xs`}></i>
    //         <h1 className="ml-2  sm:text-lg font-bold">{f.name}</h1>
    //       </div>
    //     );
    //   })}
    // </div>
  );
};

export default Frontend;
