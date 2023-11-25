import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";

import { useState } from "react";
import "./navbar.css"
import { Link } from 'react-router-dom';

const NavItem = ({ to, children, onClick }) => {
  return (
    <li>
      <Link to={to} onClick={onClick}>
        {children}
      </Link>
    </li>
  );
};

const NavBar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <>
      <nav >
        <Link to="/" className="logo">
          baking horizon
        </Link>
        <ul className="top-ul">
          <NavItem to="/">home</NavItem>
          <NavItem to="/gallery">gallery</NavItem>
          <NavItem to="/menu">menu</NavItem>
          <NavItem to="/faq">faq</NavItem>
          <NavItem to="/contact">contact</NavItem>
        </ul>
        <div  onClick={handleNav} className="menu-button">
            {!nav ? <AiOutlineMenu size={30} /> : <AiOutlineClose size={30} />}
        </div>
    </nav>
    <nav className={`mobile-menu ${nav ? "clicked" : "hidden"}`}>
      <ul>
        <NavItem to="/" onClick={handleNav}>home</NavItem>
        <NavItem to="/gallery" onClick={handleNav}>gallery</NavItem>
        <NavItem to="/menu" onClick={handleNav}>menu</NavItem>
        <NavItem to="/faq" onClick={handleNav}>faq</NavItem>
        <NavItem to="/contact" onClick={handleNav}>contact</NavItem>
      </ul>
    </nav>
    </>
  );
};

export default NavBar;
