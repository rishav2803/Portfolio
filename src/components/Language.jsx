const Language = ({ language }) => {
  return (
    <div className=" flex justify-center items-center flex-col sm:mt-0">
      <div className="flex-col text-3xl font-bold text-title-color">
        <p>OTHER LANGUAGES</p>
        <div className="h-[2px] w-[50%] bg-alt-text-color mx-auto"></div>
      </div>
      <div className="text-title-color grid grid-cols-2 sm:grid-cols-3 gap-[3rem] mt-8 ">
        {language.map((f) => {
          return (
            <div className="text-center">
              <i className={`${f.src}  text-5xl sm:text-4xl mb-2`}></i>
              <p className="font-jetbrains">{f.name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Language;
