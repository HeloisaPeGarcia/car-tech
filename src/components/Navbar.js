// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';


function Navbar() {
  const navbarStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '10px 20px',
    backgroundColor: '#1c1c1c'
  };

  const logoStyle = {
    width: '30px',
    height: 'auto'
  };

  const linksStyle = {
    listStyle: 'none',
    display: 'flex',
    gap: '15px',
    margin: 0,
    padding: 0
  };

  const linkStyle = {
    color: '#fff',
    textDecoration: 'none',
    padding: '8px 12px',
    borderRadius: '5px'
  };

  const linkHoverStyle = {
    backgroundColor: 'rgba(255, 255, 255, 0.1)'
  };

  const userButtonStyle = {
    color: '#fff',
    border: '1px solid #fff',
    padding: '8px 12px',
    borderRadius: '5px',
    backgroundColor: 'transparent'
  };

  return (
    <nav style={navbarStyle}>
      <div>
        <img src={require('../assets/logo.png')} alt="Logo da Empresa" style={logoStyle} />
      </div>
      <ul style={linksStyle}>
        <li>
          <Link
            to="/CadastrarServico"
            style={linkStyle}
            onMouseEnter={(e) => e.target.style.backgroundColor = linkHoverStyle.backgroundColor}
            onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
          >
            Serviços
          </Link>
        </li>
        <li>
          <Link
            to="/form"
            style={linkStyle}
            onMouseEnter={(e) => e.target.style.backgroundColor = linkHoverStyle.backgroundColor}
            onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
          >
            Contato
          </Link>
        </li>
      </ul>
      <div>
        <button
          style={userButtonStyle}
          onMouseEnter={(e) => e.target.style.backgroundColor = linkHoverStyle.backgroundColor}
          onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
        >
          Bem-vindo João
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
