import { BiBriefcaseAlt, BiHomeAlt } from "react-icons/bi";
import { FiUser, FiMail } from "react-icons/fi";
import nxtwatch from "./assests/nxtwatch.png";
import movieBooking from "./assests/movie-booking-app.png";

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
    url: "https://extraordinary-manatee-3ba453.netlify.app/",
    pic: (
      <img
        src={nxtwatch}
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
  
];
