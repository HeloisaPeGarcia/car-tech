// src/components/Header.js
import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube, FaLinkedin } from 'react-icons/fa';
import '../App.css';

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <img src={require('../assets/logo.png')} alt="Logo da Empresa" className="logo-img" />
      </div>
      <nav>
        <ul>
          <li><a href="#services">Serviços</a></li>
          <li><a href="#contact">Contato</a></li>
          <li><a href="#portfolio">Portfólio</a></li>
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
