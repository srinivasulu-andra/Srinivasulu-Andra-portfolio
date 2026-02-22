import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {

  // mobile menu state
  const [menuOpen, setMenuOpen] = useState(false);

  // menu items
  const menuItems = [
    { name: "Home", id: "Home" },
    { name: "About", id: "About" },
    { name: "Experience", id: "Experience" },
    { name: "Projects", id: "Projects" },
    { name: "Skills", id: "Skills" },
    { name: "Certificates", id: "Certificates" },
    { name: "Contact", id: "Contact" }
  ];

  // toggle menu
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // close menu after click
  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (

    <nav className="navbar">

      <div className="container-custom navbar-container">

        {/* LEFT SIDE LOGO */}
        <div className="navbar-logo">
          ANDRA SRINIVASULU
        </div>


        {/* RIGHT SIDE MENU (DESKTOP) */}
        <div className="navbar-menu">

          {menuItems.map((item) => (

            <a
              key={item.id}
              href={`#${item.id}`}
              className="navbar-link"
            >
              {item.name}
            </a>

          ))}

        </div>


        {/* MOBILE TOGGLE BUTTON */}
        <div className="navbar-toggle" onClick={toggleMenu}>

          {menuOpen ? (
            <FiX />
          ) : (
            <FiMenu />
          )}

        </div>

      </div>


      {/* MOBILE MENU */}
      {menuOpen && (

        <div className="navbar-menu active">

          {menuItems.map((item) => (

            <a
              key={item.id}
              href={`#${item.id}`}
              className="navbar-link"
              onClick={closeMenu}
            >
              {item.name}
            </a>

          ))}

        </div>

      )}

    </nav>

  );

};

export default Navbar;