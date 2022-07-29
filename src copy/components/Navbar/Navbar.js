import React from "react";
import "./Navbar.css";
import { GiHamburgerMenu } from "react-icons/gi";
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar__menu">
        <GiHamburgerMenu />
        <p className="navbar__menu__text">All</p>
      </div>
      <ul className="navbar__collection">
        <li className="navbar__item">Today's Deals</li>
        <li className="navbar__item">Customer Service</li>
        <li className="navbar__item">Registry</li>
        <li className="navbar__item">Gift Cards</li>
        <li className="navbar__item">Sell</li>
      </ul>
    </div>
  );
};

export default Navbar;
