import React, { useEffect, useRef } from "react";
import "./style.css";
import hero from "../assests/hero_image";
import { FiDownload } from "react-icons/fi";
import Typewriter from "typewriter-effect";
import logo from "../assests/logo.svg";
import resume from "../assests/resume.pdf";
import Link from "react-scroll/modules/components/Link";

const Home = ({ setHomeOffset }) => {
  const homeRef = useRef();

  useEffect(() => {
    setHomeOffset(homeRef.current.offsetTop);
  }, [homeRef]);

  return (
    <div
      id="Home"
      className="w-100 bg-dark-blue height-home text-light padding-heavy d-flex flex-column justify-content-start justify-content-lg-end"
    >
      <div className="d-md-none p-4" data-aos="fade-right" ref={homeRef}>
        <img src={logo} alt="yash-pic" className="main-logo-small" />
      </div>
      <div className="d-flex justify-content-end align-items-around ps-4 mt-auto mb-auto">
        <div
          className="align-self-center text-box me-auto ms-4"
          data-aos="fade-up"
        >
          <h1>
            <div className="mb-3">Hey, I am</div>
            <div className="role-text ms-1">
              <Typewriter
                options={{ loop: true }}
                onInit={(typewriter) => {
                  typewriter
                    .pauseFor(1000)
                    .typeString("Nagendra Tangeti")
                    .pauseFor(2000)
                    .deleteAll()
                    .typeString("Web Developer")
                    .pauseFor(2000)
                    .deleteAll()
                    .typeString("UI Designer")
                    .pauseFor(2000)
                    .start();
                }}
              />
            </div>
          </h1>
          <p className="coloured-text mt-4">
            Stick Around to know more about me
          </p>
          <div className="mt-4">
            <Link to="Connect" offset={-50}>
              <button className="butn mb-2">Contact Me</button>
            </Link>
            <button className="butn-outline">
              <FiDownload className="me-2" />
              <a className="a" href={resume} download="_Nagendra_Tangeti_Resume">
                Resume
              </a>
            </button>
          </div>
        </div>
        <div className="d-none d-lg-block" data-aos="fade-down">
          <img src={hero} alt="hero" className="hero-image" />
        </div>
      </div>
    </div>
  );
};

export default Home;
