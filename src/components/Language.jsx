const Language = ({ language }) => {
  return (
    <div className="gap-3 my-5 ml-3 grid grid-cols-5 grid-rows-1 sm:grid-rows-3 sm:grid-cols-2 text-center">
      {language.map((f) => {
        return (
          <div className="flex justify-center items-center border-solid border-2 border-alt-text-color p-2 rounded-lg text-title-color">
            <i className={`${f.src} text-2xl sm:text-sm`}></i>
            <h1 className="ml-2  sm:text-lg font-bold">{f.name}</h1>
          </div>
        );
      })}
    </div>
  );
};

export default Language;
