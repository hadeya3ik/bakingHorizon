import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./navbar.css";

const NavItem = ({ to, children, onClick, isActive }) => {
  return (
    <li className="nav-li">
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
  const location = useLocation();

  const handleNav = () => {
    setNav(!nav);
  };

  const handleResize = () => {
    if (window.innerWidth > 768) {
      setNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <nav className="top-nav">
        <Link to="/" className="logo">
          baking horizon
        </Link>
        <ul className="top-ul">
          {navItems.map((item) => (
            <NavItem
              key={item.to}
              to={item.to}
              onClick={() => handleNav()}
              isActive={location.pathname === item.to}>
              {item.text}
            </NavItem>
          ))}
        </ul>
        <div onClick={handleNav} className="menu-icon">
          {!nav ? <AiOutlineMenu size={30} /> : <AiOutlineClose size={30} />}
        </div>
      </nav>
      <nav className={`mobile-menu ${nav ? "clicked" : "hidden"}`}>
        <ul className="side-ul">
          {navItems.map((item) => (
            <NavItem
              key={item.to}
              to={item.to}
              onClick={() => handleNav()}
              isActive={location.pathname === item.to}>
              {item.text}
            </NavItem>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default NavBar;
