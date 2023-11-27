import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
import { useState } from "react";
import "./navbar.css";
import { Link } from "react-router-dom";

const NavItem = ({ to, children, onClick, isActive }) => {
  return (
    <li>
      <Link to={to} onClick={onClick} className={isActive ? "active" : ""}>
        {children}
      </Link>
    </li>
  );
};

const navItems = [
  { to: "/", text: "home" },
  { to: "/gallery", text: "gallery" },
  { to: "/menu", text: "menu" },
  { to: "/faq", text: "faq" },
  { to: "/contact", text: "contact" },
];

const NavBar = () => {
  const [nav, setNav] = useState(false);
  const [activeNavItem, setActiveNavItem] = useState("/");

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
          {navItems.map((item) => (
            <NavItem
              key={item.to}
              to={item.to}
              onClick={() => handleNavItemClick(item.to)}
              isActive={activeNavItem === item.to}>
              {item.text}
            </NavItem>
          ))}
        </ul>
        <div onClick={handleNav} className="menu-button">
          {!nav ? <AiOutlineMenu size={30} /> : <AiOutlineClose size={30} />}
        </div>
      </nav>
      <nav className={`mobile-menu ${nav ? "clicked" : "hidden"}`}>
        <ul className="side-ul">
          {navItems.map((item) => (
            <NavItem
              key={item.to}
              to={item.to}
              onClick={() => handleNavItemClick(item.to)}
              isActive={activeNavItem === item.to}>
              {item.text}
            </NavItem>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default NavBar;