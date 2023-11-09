import ticimg from "./assets/aa.png";
import taskerImg from "./assets/aaa.png";
import bankimg from "./assets/bank.png";
import chatimg from "./assets/chatapp.png";
import movieimg from "./assets/movie.png";

export const projects = [
  {
    name: "Taskerrr",
    features: [
      "Provide a easy and manageable way for the user to handle their task",
      "Provides three different categories to put their task namely todo,Doing,Done",
    ],
    tags: ["ReactJs", "Firebase"],
    src: taskerImg,
    git: "https://github.com/rishav2803/Taskerr",
  },
  {
    name: "Game_Zone",
    features: [
      "Game-Zone offers a variety of classic games like tic-tac-toe and rock-paper-scissors.",
      "Users can enjoy different gaming modes such as playing against the computer, or competing with friends in multiplayer mode.",
    ],
    tags: ["ReactJs", "Typescript", "Go", "ChakraUi"],
    src: ticimg,
    git: "https://github.com/rishav2803/Game_Zone",
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
