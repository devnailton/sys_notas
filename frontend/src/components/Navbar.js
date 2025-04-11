import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "10px 20px",
        backgroundColor: "#333",
        color: "#fff",
      }}
    >
      {/* Logo à esquerda */}
      <Link to="/" style={{ color: '#fff', textDecoration: 'none' }}>
        <h1 style={{ fontSize: "24px" }}>Sistema de Notas</h1>
      </Link>

      {/* Links à direita */}
      <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
        {/* Link Sobre Nós */}
        <a 
          href="#aboutUs" 
          style={{
            color: "#fff",
            textDecoration: "none",
            fontSize: "16px",
            transition: "color 0.3s"
          }}
          onMouseOver={(e) => e.target.style.color = "#28a745"}
          onMouseOut={(e) => e.target.style.color = "#fff"}
        >
          Sobre Nós
        </a>

        {/* Ícone de login */}
        <Link
          to="/login"
          style={{
            color: "#fff",
            textDecoration: "none",
            fontSize: "24px",
          }}
        >
          <FontAwesomeIcon icon={faUser} />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;