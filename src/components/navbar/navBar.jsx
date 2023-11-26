import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
import { useState } from "react";
import "./navbar.css";
import { Link } from 'react-router-dom';

const NavItem = ({ to, children, onClick, isActive }) => {
  return (
    <li>
      <Link to={to} onClick={onClick} className={isActive ? 'active' : ''}>
        {children}
      </Link>
    </li>
  );
};

const NavBar = () => {
  const [nav, setNav] = useState(false);
  const [activeNavItem, setActiveNavItem] = useState(null);

  const handleNav = () => {
    setNav(!nav);
  };

  const handleNavItemClick = (to) => {
    setActiveNavItem(to);
    handleNav();
  };

  return (
    <>
      <nav>
        <Link to="/" className="logo">
          baking horizon
        </Link>
        <ul className="top-ul">
          <NavItem to="/" onClick={() => handleNavItemClick("/")} isActive={activeNavItem === "/"}>home</NavItem>
          <NavItem to="/gallery" onClick={() => handleNavItemClick("/gallery")} isActive={activeNavItem === "/gallery"}>gallery</NavItem>
          <NavItem to="/menu" onClick={() => handleNavItemClick("/menu")} isActive={activeNavItem === "/menu"}>menu</NavItem>
          <NavItem to="/faq" onClick={() => handleNavItemClick("/faq")} isActive={activeNavItem === "/faq"}>faq</NavItem>
          <NavItem to="/contact" onClick={() => handleNavItemClick("/contact")} isActive={activeNavItem === "/contact"}>contact</NavItem>
        </ul>
        <div onClick={handleNav} className="menu-button">
          {!nav ? <AiOutlineMenu size={30} /> : <AiOutlineClose size={30} />}
        </div>
      </nav>
      <nav className={`mobile-menu ${nav ? "clicked" : "hidden"}`}>
        <ul>
          <NavItem to="/" onClick={() => handleNavItemClick("/")} isActive={activeNavItem === "/"}>home</NavItem>
          <NavItem to="/gallery" onClick={() => handleNavItemClick("/gallery")} isActive={activeNavItem === "/gallery"}>gallery</NavItem>
          <NavItem to="/menu" onClick={() => handleNavItemClick("/menu")} isActive={activeNavItem === "/menu"}>menu</NavItem>
          <NavItem to="/faq" onClick={() => handleNavItemClick("/faq")} isActive={activeNavItem === "/faq"}>faq</NavItem>
          <NavItem to="/contact" onClick={() => handleNavItemClick("/contact")} isActive={activeNavItem === "/contact"}>contact</NavItem>
        </ul>
      </nav>
    </>
  );
};

export default NavBar;
