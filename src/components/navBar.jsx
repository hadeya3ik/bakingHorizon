import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import "./navbar.css"

const NavItem = ({ to, children}) => (
  <li>
    <Link to={to}>{children}</Link>
  </li>
);

const NavBar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <>
    <link href="https://fonts.googleapis.com/css2?family=Agbalumo&family=Geologica:wght@500;600&family=IBM+Plex+Mono:ital,wght@1,200&family=IBM+Plex+Sans+Thai+Looped:wght@300&display=swap" rel="stylesheet"></link>
      <nav className="flex items-center justify-between">
        <Link to="/" className="logo">
          baking horizon
        </Link>
        <ul className="hidden md:flex space-x-4">
          <NavItem to="/">home</NavItem>
          <NavItem to="/gallery">gallery</NavItem>
          <NavItem to="/menu">menu</NavItem>
          <NavItem to="/faq">faq</NavItem>
          <NavItem to="/contact">contact</NavItem>
        </ul>
        <div className="md:hidden">
          <div  onClick={handleNav} className="px-1">
            {!nav ? <AiOutlineMenu size={30} /> : <AiOutlineClose size={30} />}
          </div>
        </div>
    </nav>
    <nav className={`mobile-menu md:hidden ${nav ? "" : "hidden"}`}>
      <ul className="flex flex-col items-center pt-16">
          <NavItem to="/">home</NavItem>
          <NavItem to="/gallery">gallery</NavItem>
          <NavItem to="/menu">menu</NavItem>
          <NavItem to="/faq">faq</NavItem>
          <NavItem to="/contact">contact</NavItem>
        </ul>
      </nav>
    </>
  );
};

export default NavBar;
