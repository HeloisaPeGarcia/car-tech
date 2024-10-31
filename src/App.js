import React from 'react';
import './App.css';
import Header from './components/Header';
import Line from './components/Line';
import Footer from './components/Footer';
import Portfolio from './components/Portfolio';
import Servicos from './components/Servicos';
import Form from './components/Form';
import Avaliacoes from './components/Avaliacao'; 
import Sobre from './components/Sobre';
import { Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header />

      <nav>
        <ul>
          <li><Link to="/Header">Home</Link></li>
          <li><Link to="/Portfolio">Portfolio</Link></li>
          <li><Link to="/Servicos">Serviços</Link></li>
          <li><Link to="/Form">Contato</Link></li>
        </ul>
      </nav>

      <section className="hero">
        {/* Conteúdo da seção principal */}
      </section>

      <Routes>
        <Route path="/Header" element={<Header />} />
        <Route path="/Portfolio" element={<Portfolio />} />
        <Route path="/Servicos" element={<Servicos />} />
        <Route path="/Form" element={<Form />} />
      </Routes>

      <div className="content">
        <Sobre />
        <Servicos />
        <Avaliacoes /> {/* Renderiza as avaliações aqui */}
      </div>

      <Line />
      <Footer />
    </div>
  );
}

export default App;
