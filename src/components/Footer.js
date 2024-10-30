// src/components/Footer.js
import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube, FaLinkedin } from 'react-icons/fa';
import '../App.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="social-media">
        <p>Siga-nos:</p>
        <div className="icons">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebookF />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter />
          </a>
          <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
            <FaYoutube />
          </a>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
        </div>
      </div>
      <div className="links">
        <div className="column">
          <h4>Serviços Automotivos</h4>
          <ul>
            <li>Troca de Óleo</li>
            <li>Revisão Completa</li>
            <li>Alinhamento e Balanceamento</li>
            <li>Diagnóstico Eletrônico</li>
            <li>Freios e Suspensão</li>
            <li>Ar-Condicionado</li>
          </ul>
        </div>
        <div className="column">
          <h4>Dicas de Manutenção</h4>
          <ul>
            <li>Cuidados com os Pneus</li>
            <li>Verificação de Fluídos</li>
            <li>Bateria e Sistema Elétrico</li>
            <li>Sistema de Arrefecimento</li>
          </ul>
        </div>
        <div className="column">
          <h4>Recursos e Guias</h4>
          <ul>
            <li>Blog de Mecânica</li>
            <li>Tutoriais de Manutenção</li>
            <li>Ferramentas Recomendadas</li>
            <li>Guia de Peças Automotivas</li>
            <li>Suporte Técnico</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
