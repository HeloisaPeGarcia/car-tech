import React from 'react';
import './App.css';
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube, FaLinkedin } from 'react-icons/fa';

function Header() {
  return (
    <header className="header">
      <div className="logo">
      <img src={require('./assets/logo.png')} alt="Logo da Empresa" className="logo-img" 
/>
      </div>
      <nav>
        <ul>
          <li><a href="#services">Serviços</a></li>
          <li><a href="#contact">Contato</a></li>
          <li><a href="#portfolio">Portfolio</a></li>
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


function Servicos() {
  return (
    <section id="services" className="services">
      <h2>Serviços Ofertados</h2>
      <div className="service">
        <h3>Manutenção</h3>
        <p>A manutenção preventiva é um dos pontos importantes para prolongar a vida útil do seu carro.</p>
      </div>
      <div className="service">
        <h3>Modificação</h3>
        <p>Personalize o visual e o desempenho do seu carro com nossos serviços de modificação.</p>
      </div>
      <div className="service">
        <h3>Revisão</h3>
        <p>Nosso serviço de revisão garante que seu carro esteja sempre em perfeitas condições.</p>
      </div>
    </section>
  );
}

// Renomeie aqui
function Line() {
  return <div className="separator" />
}

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

function App() {
  return (
    <div className="App">
      <Header />
      <section className="hero">
        {/* Conteúdo da seção hero */}
      </section>
      <Servicos />
      <Line /> {/* Chamando o componente Line corretamente */}
      <Footer />
    </div>
  );
}

export default App;
