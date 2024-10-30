
import React from 'react';
import '../App.css';
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
    <div className="logo">
      <img src={require('../assets/logo.png')} alt="Logo da Empresa" className="logo-img" />
    </div>
    <nav>
      <ul>
        <li><a href="#services">Serviços</a></li>
        <li><Link to="/Form">Contato</Link></li>
        <li><Link to="/Portfolio">Portfolio</Link></li>
        <li><a href="#about">Sobre nós</a></li>
      </ul>
    </nav>
    <div className="auth-buttons">
      <button className="login">Login</button>
      <button className="register">Register</button>
    </div>
  </header>
  );
}

export default Header;
