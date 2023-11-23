import { RiMenuFill } from "react-icons/ri";
import { IoCloseSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import React, { useState } from "react";

const NavItem = ({ to, children, isColumn }) => (
  <li className={`px-8 ${isColumn ? 'p-4 text-center' : ''}`}>
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
      <nav className="bg-red-500 flex px-8 pl-10 py-4 uppercase justify-between items-center">
        <Link to="/" className="text-3xl">
          baking horizon
        </Link>
        <div className="hidden md:flex">
          {/* Render the regular navigation on larger screens */}
          <ul className="flex justify-around">
            <NavItem to="/">home</NavItem>
            <NavItem to="/gallery">gallery</NavItem>
            <NavItem to="/menu">menu</NavItem>
            <NavItem to="/faq">faq</NavItem>
            <NavItem to="/contact">contact</NavItem>
          </ul>
        </div>
        <div className="md:hidden" onClick={handleNav}>
          {/* Render the hamburger menu icon on smaller screens */}
          {!nav ? <RiMenuFill size={30} /> : <IoCloseSharp size={30} />}
        </div>
      </nav>

      {/* Render the mobile menu */}
      <nav className={`md:hidden ${nav ? "bg-blue-500" : "hidden"}`}>
        <div className={`${nav ? "bg-blue-500" : ""}`}>
          <ul className="">
            <NavItem to="/" isColumn>home</NavItem>
            <NavItem to="/gallery" isColumn>gallery</NavItem>
            <NavItem to="/menu" isColumn>menu</NavItem>
            <NavItem to="/faq" isColumn>faq</NavItem>
            <NavItem to="/contact" isColumn>contact</NavItem>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
