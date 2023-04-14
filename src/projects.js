import ticimg from "./assets/tic.png";
import bankimg from "./assets/bank.png";
import chatimg from "./assets/chatapp.png";
import movieimg from "./assets/movie.png";


export const projects = [
    {
        name: "Mulitplayer Tic Tac Toe Game",
        features: [
            "Play 1v1 with other player",
            "Play with computer",
            "Tournament Mode",
            "Ability to play with same player again"
        ],
        tags: [
            "ReactJs",
            "Typescript",
            "Go"
        ],
        src: ticimg,
        git: "https://github.com/rishav2803/Multiplayer_Tic_Tac_Toe"

    },
    {
        name: "Chat Application",
        features: [
            "Registration and authentication of the users",
            "Chat with the currently online users",
            "Chat with the Recently contacted users",
            "Offline Chatting",
        ],
        tags: [
            "ReactJs",
            "NodeJs",
            "mysql",
        ],
        src: chatimg,
        git: "https://github.com/rishav2803/chat_application"
    },
    {
        name: "Movie and Series Review System",
        features: [
            "Registration and authentication of the users",
            "User can give rating based on different parameter given",
            "Current top movies and series are shown",
            "Movies are fetched from external api"
        ],
        tags: [
            "EJS",
            "NodeJs",
            "mysql",
        ],
        src: movieimg,
        git: "https://github.com/rishav2803/Movie-review-"
    },
    {
        name: "Bank Management System",
        features: [
            "Registration of the users",
            "Transfering of money",
            "Transfering history",
            "Authentication",
        ],
        tags: [
            "Bootstrap",
            "NodeJs",
            "mysql",
        ],
        src: bankimg,
        git: "https://github.com/rishav2803/Multiplayer_Tic_Tac_Toe"
    },
]