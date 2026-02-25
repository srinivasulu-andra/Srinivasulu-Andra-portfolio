import React, { useState, useEffect } from "react";
import { FiMenu, FiX, FiSun, FiMoon } from "react-icons/fi";

const Navbar = () => {

  // mobile menu
  const [menuOpen, setMenuOpen] = useState(false);

  // theme state
  const [theme, setTheme] = useState("dark");

  // load saved theme when page opens
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);

  // apply theme to entire website
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

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

  // toggle mobile menu
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // close mobile menu
  const closeMenu = () => {
    setMenuOpen(false);
  };

  // toggle theme
  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (

    <nav className="navbar">

      <div className="container-custom navbar-container">

        {/* LOGO */}
        <div className="navbar-logo">
          ANDRA SRINIVASULU
        </div>

        {/* DESKTOP MENU */}
        <div className="navbar-menu desktop-menu">
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

        {/* THEME BUTTON */}
        <div className="theme-toggle" onClick={toggleTheme}>
          {theme === "dark" ? <FiSun /> : <FiMoon />}
        </div>

        {/* MOBILE BUTTON */}
        <div className="navbar-toggle" onClick={toggleMenu}>
          {menuOpen ? <FiX /> : <FiMenu />}
        </div>

      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="navbar-menu mobile-menu">
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