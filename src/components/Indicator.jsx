export default function Indicator({ active }) {
  return (
    <div className="fixed h-screen w-[3%] left-0 sm:hidden">
      <div className="mt-[19.6rem]">
        <div
          className={`circle ${active.active == "hero" ? "currPage" : ""}`}
        ></div>
        <div
          className={`circle ${active.active == "project" ? "currPage" : ""}`}
        ></div>
        <div
          className={`circle ${active.active == "about" ? "currPage" : ""}`}
        ></div>
        <div
          className={`circle ${active.active == "skill" ? "currPage" : ""}`}
        ></div>
      </div>
    </div>
  );
}
