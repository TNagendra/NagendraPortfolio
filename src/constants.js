import { BiBriefcaseAlt, BiHomeAlt } from "react-icons/bi";
import { FiUser, FiMail } from "react-icons/fi";
import nxtWatch from "./assests/nxtWatch.png";
import movieBooking from "./assests/movie-booking-app.png";
import foodMunch from "./assests/foodMunch.png";
import jobbyApp from "./assests/jobbyApp.png";

export const navItems = [
  {
    name: "Home",
    icon: <BiHomeAlt className="mobile-nav-icon" />,
  },
  {
    name: "Work",
    icon: <BiBriefcaseAlt className="mobile-nav-icon" />,
  },
  {
    name: "About",
    icon: <FiUser className="mobile-nav-icon" />,
  },
  {
    name: "Connect",
    icon: <FiMail className="mobile-nav-icon" />,
  },
];

export const projects = [
  {
    id: 1,
    name: "Nxt Watch",
    subtitle: "Youtube Clone | React Application",
    description: `Watch Trending Videos | Save videos to watch later | Find videos in topics and categories | Give the video a thumbs up or a thumbs down depending on whether you like it or not`,
    url: "https://648be61e1ebecc2b22dd5bb6--benevolent-gumption-624532.netlify.app/login",
    pic: (
      <img
        src={nxtWatch}
        alt="NxtWatch-Project"
        className="col-12 col-md-9 col-lg-12"
      />
    ),
  },
  {
    id: 2,
    name: "Movie Tickets Booking App",
    subtitle: "React Application",
    description: `Developed responsive Movie tickets booking application shows all the movies available and its locations. Used React.js for frontend, Node.js and Express.js for handling REST API calls.
    Implemented Firebase Authentication.`,
    url: "https://enchanting-marzipan-48dc7d.netlify.app/",
    pic: (
      <img
        src={movieBooking}
        alt="Movie-Tickets-Booking-App"
        className="col-12 col-md-9 col-lg-12"
      />
    ),
  },
  {
    id: 3,
    name: "Jobby App",
    subtitle: "Job Demo | React Application",
    description: `Jobby helps to search the relevant jobs and you can filter the salary range | Used React.js for frontend, Node.js and Express.js for handling REST API calls.`,
    url: "https://648bf81b7897082fe1307740--wonderful-swan-290419.netlify.app/",
    pic: (
      <img
        src={jobbyApp}
        alt="Jobby-App"
        className="col-12 col-md-9 col-lg-12"
      />
    ),
  },
  {
    id: 4,
    name: "Food Munch Demo",
    subtitle: "Food App Demo",
    description: `Developed a responsive website for Food Store where users can see list of food items & information.`,
    url: "https://yashfoodsite.ccbp.tech/",
    pic: (
      <img
        src={foodMunch}
        alt="Food-Munch"
        className="col-12 col-md-9 col-lg-12"
      />
    ),
  },
  
];
