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
      <Link to="/" style={{ color: '#fff', textDecoration: 'none' }}>
        <h1 style={{ fontSize: "24px" }}>Sistema de Notas</h1>
      </Link>
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
    </nav>
  );
};

export default Navbar;