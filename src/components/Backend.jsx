const Backend = ({ backend }) => {
  return (
    <div className=" flex justify-center items-center flex-col sm:mt-0">
      <div className="flex-col text-xl font-bold text-title-color">
        <p>BACK END</p>
        <div className="h-[2px] w-[50%] bg-alt-text-color mx-auto"></div>
      </div>
      <div className="text-title-color grid grid-cols-2 sm:grid-cols-3 gap-[3rem] mt-8 ">
        {backend.map((f) => {
          return (
            <div className="text-center">
              <i className={`${f.src}  text-5xl sm:text-xl mb-2`}></i>
              <p className="font-jetbrains">{f.name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Backend;
