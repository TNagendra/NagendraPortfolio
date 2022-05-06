import React, { useContext } from "react";
import "./style.css";
import { navItems } from "../constants.js";
import { PageContext } from "../App";

const MobileNav = () => {
  const { selectedPage, setSelectedPage } = useContext(PageContext);
  return (
    <div className="d-md-none mobile-nav d-flex fixed-bottom bg-dark-blue coloured-text justify-content-around">
      {navItems.map((item, index) => (
        <div
          key={index}
          onClick={() => setSelectedPage(item.name)}
          className={`d-flex flex-column align-items-center flex-fill p-2 pt-3 pb-3 bordered coloured ${
            selectedPage === item.name && "selected-mobile"
          }`}
        >
          {item.icon}
          {item.name}
        </div>
      ))}
    </div>
  );
};

export default MobileNav;
