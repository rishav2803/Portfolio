import ticimg from "./assets/tic.png";
import bankimg from "./assets/bank.png";
import chatimg from "./assets/chatapp.png";
import movieimg from "./assets/movie.png";

export const projects = [
  {
    name: "Mulitplayer TTT ",
    features: [
      "Developed front-end using React.JS.",
      "Developed back-end using Go(Golang).",
      "Implemented the React Router DOM to allow nested RESTful routing.",
      "Provided user with 3 modes of playing (Tournament,multiplayer,vsComputer)",
    ],
    tags: ["ReactJs", "Typescript", "Go"],
    src: ticimg,
    git: "https://github.com/rishav2803/Multiplayer_Tic_Tac_Toe",
  },
  {
    name: "WeTalk",
    features: [
      "Developed front-end with ReactJs.",
      "Used Nodejs(ExpressJs) for registering and authenticating the users.",
      "Integrated with socketio to provide the realtime chatting experience.",
      "Used mysql as the database for storing the messages and for registering users.",
      "Clean and interactive UI",
    ],
    tags: ["ReactJs", "NodeJs", "mysql"],
    src: chatimg,
    git: "https://github.com/rishav2803/chat_application",
  },
  {
    name: "MovieCraze",
    features: [
      "Used EJS for dynamically updating the HTML markup",
      "Used Nodejs(ExpressJs) and mysql for registering and authenticating the users.",
      "Integrated with moviesdb api for fetching top 20 movies and series",
      "Integrated with chatgpt api for providing sentiment analysis",
    ],
    tags: ["EJS", "NodeJs", "mysql"],
    src: movieimg,
    git: "https://github.com/rishav2803/Movie-review-",
  },
  {
    name: "Bank Management System",
    features: [
      "Registration of the users",
      "Transfering of money",
      "Transfering history",
      "Authentication",
    ],
    tags: ["Bootstrap", "NodeJs", "mysql"],
    src: bankimg,
    git: "https://github.com/rishav2803/Multiplayer_Tic_Tac_Toe",
  },
];

