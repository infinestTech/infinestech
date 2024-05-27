import React, { useState, useEffect } from "react";
import "../css/NavBar.scss"; // Ensure SCSS is compiled
import img from "../images/logobird.png";
import { Link } from "react-router-dom"; // Make sure to import Link

const NavBar = () => {
  const [isMobileNavVisible, setMobileNavVisible] = useState(false);

  const toggleMobileNav = () => {
    setMobileNavVisible(!isMobileNavVisible);
  };

  return (
    <div className="header  font-poppins">
      <div className="header__logo md:w-auto w-[8rem] md:ml-40">
        <strong>
          <img src={img} alt="" style={{ width: "200px" }} />
        </strong>
      </div>
      <nav className="navbar !hidden md:!flex">
        <ul className="navbar__menu">
          <NavItem link="/home" label="Home" />
          <NavItem link="/about" label="About" />
          <NavItem link="/careers" label="Contact" />{" "}
          {/* Changed to "/contact" for consistency */}
        </ul>
      </nav>
      <nav
        className={`navbar-mob md:hidden absolute top-0 bg-gray-900 p-10 flex justify-around items-center text-yellow-500 h-screen w-[70%] transition-all duration-300 ease-in-out ${
          isMobileNavVisible ? "right-0" : "right-[-100%]"
        }`}
      >
        <span
          className="absolute top-5 left-5 cursor-pointer"
          onClick={toggleMobileNav}
        >
          <i className="fa-regular fa-2xl fa-circle-xmark"></i>
        </span>
        <div className="flex  items-center justify-satrt flex-col">
          <Link
            to="/home"
            className="text-2xl my-5 cursor-pointer"
            onClick={toggleMobileNav}
          >
            Home
          </Link>
          <Link
            to="/about"
            className="text-2xl my-5 cursor-pointer"
            onClick={toggleMobileNav}
          >
            About
          </Link>
          <Link
            to="/careers"
            className="text-2xl my-5 cursor-pointer"
            onClick={toggleMobileNav}
          >
            Careers
          </Link>
        </div>
        <div className="social-container  w-full text-center mx-auto">
          <ul className="social-icons">
            <li>
              <a href="#">
                <i className="fa fa-instagram"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa fa-twitter"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa fa-linkedin"></i>
              </a>
            </li>
            <li>
              <a target="_blank" href="https://wa.me/916382633918">
                <i className="fa fa-whatsapp  "></i>
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <i
        className="fa-solid fa-bars fa-2xl ml-auto text-yellow-600 md:hidden cursor-pointer"
        onClick={toggleMobileNav}
      ></i>
    </div>
  );
};

const NavItem = ({ link, label }) => (
  <li className="navbar__item">
    <Link to={link} className="navbar__link">
      <span>{label}</span>
    </Link>
  </li>
);

export default NavBar;
