import { RiMenuFill } from "react-icons/ri";
import { IoCloseSharp } from "react-icons/io5";
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
            {!nav ? <RiMenuFill size={30} /> : <IoCloseSharp size={30} />}
          </div>
        </div>
    </nav>
      {/* <nav>
        <div>
          <ul>
            <NavItem to="/" isColumn>home</NavItem>
            <NavItem to="/gallery" isColumn>gallery</NavItem>
            <NavItem to="/menu" isColumn>menu</NavItem>
            <NavItem to="/faq" isColumn>faq</NavItem>
            <NavItem to="/contact" isColumn>contact</NavItem>
          </ul>
        </div>
      </nav> */}
    </>
  );
};

export default NavBar;
