import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css"; // Vamos criar este arquivo

const Navbar = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavigation = (sectionId) => {
    navigate("/");
    setIsMenuOpen(false); // Fecha o menu após clicar
    setTimeout(() => {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  return (
    <>
      <nav className="navbar">
        {/* Logo à esquerda */}
        <Link to="/" className="navbar-logo">
          <h1>Sistema de Notas</h1>
        </Link>

        {/* Menu Desktop */}
        <div className="navbar-desktop">
          <button onClick={() => handleNavigation("aboutUs")}>
            Sobre Nós
          </button>
          <button onClick={() => handleNavigation("services")}>
            Serviços
          </button>
          <button onClick={() => handleNavigation("contact")}>
            Contato
          </button>
          <Link to="/login" className="login-icon">
            <FontAwesomeIcon icon={faUser} />
          </Link>
        </div>

        {/* Botão Hamburguer */}
        <button 
          className="hamburger-button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} />
        </button>
      </nav>

      {/* Menu Mobile */}
      <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
        <button onClick={() => handleNavigation("aboutUs")}>
          Sobre Nós
        </button>
        <button onClick={() => handleNavigation("services")}>
          Serviços
        </button>
        <button onClick={() => handleNavigation("contact")}>
          Contato
        </button>
        <Link to="/login" onClick={() => setIsMenuOpen(false)}>
          Login
        </Link>
      </div>

      {/* Overlay para fechar o menu ao clicar fora */}
      {isMenuOpen && (
        <div 
          className="mobile-menu-overlay"
          onClick={() => setIsMenuOpen(false)}
        />
      )}
    </>
  );
};

export default Navbar;