import React, { useState } from "react";
import "./Navbar.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-container">
        <h1 className="logo">🌾 AgroIA</h1>

        <div
          className={`menu-toggle ${open ? "active" : ""}`}
          onClick={() => setOpen(!open)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        <ul className={`nav-links ${open ? "open" : ""}`}>
          <li><a href="/">Início</a></li>
          <li><a href="/ia">IA Agrícola</a></li>
          <li><a href="/comunidade">Comunidade</a></li>
          <li><a href="/sobre">Sobre</a></li>
        </ul>
      </div>
    </nav>
  );
}
