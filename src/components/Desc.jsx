import "./Project.css";

export default function Desc({img,onModal,name,tags,desc,repo}) {
  return (
    <>
      <div className="overlay">
        <div className="modal_container">
          <div className="modal_img">
            <img
              src={img}
              className="w-full h-full object-cover"
              alt="image"
              loading="lazy"
            />
          </div>
          <div className="modal_body">
            <header className="modal_title_container">
              <div className="modal_title">
                {name}
                <span onClick={()=>{onModal(false)}} className="cross">&#10005;</span>
              </div>
              <div className="modal_title_meta">
                {tags.map((it)=>{
                  return(
                    <p className="tags">{it}</p>
                  )
                })}
              </div>
            </header>
            <div className="about">
              <ul className="about_list">
                {desc.map(l=>{
                  return(
                    <li>{l}</li>
                  )
                })}
              </ul>
            </div>
            <div className="footer">
              <a className="code" target="_blank" href={repo}>
                Code
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
