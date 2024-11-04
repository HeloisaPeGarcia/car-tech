import {  Link } from 'react-router-dom'; // Adicione o Link
import React from 'react';
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
          <li><Link to="/form">Contato</Link></li>
          <li><a href="#Portfolio">Portfolio</a></li>
          <li><a href="#ContentSection">Sobre nós</a></li>
        </ul>
      </nav>
      <div className="auth-buttons">
        <Link to="/login">
          <button className="login">Login</button>
        </Link>
      </div>
    </header>
  );
}

export default Header;

