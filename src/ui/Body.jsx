const Body = (props) => {
  return (
    <div className="min-h-screen  bg-gradient-to-bl from-background-color to-alt-background-color">
      {props.children}
    </div>
    // <div className="min-h-screnn bg-test">{props.children}</div>
  );
};

export default Body;
