import React from 'react';
import './App.css';
import Header from './components/Header';
import Line from './components/Line';
import Footer from './components/Footer';
import Portfolio from './components/Portfolio';
import Servicos from './components/Servicos';
import Form from './components/Form';
import Avaliacao from './components/Avaliacao';
import Sobre from './components/Sobre';
import Login from './components/Login';
import Estoque from './components/Estoque';
import { Routes, Route, useLocation } from 'react-router-dom';

function App() {
  const location = useLocation();

  return (
    <div className="App">
      {/* Sempre renderiza o Header */}
      <Header />

      <section className="hero">
        <Routes>
          {/* Rota para o componente Login */}
          <Route path="/login" element={<Login />} />

          {/* Rota para a página de Estoque */}
          <Route path="/estoque" element={<Estoque />} />

          {/* Outras rotas que renderizam seções específicas */}
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/about" element={<Sobre />} />
          <Route path="/form" element={<Form />} />
        </Routes>
      </section>
     
      {/* Renderiza o conteúdo principal apenas se a rota não for "/login" */}
      {location.pathname !== '/login' && (
        <>
          <Sobre />
          <Line />
          <Servicos />
          <Line />
          <Avaliacao />
          <Portfolio />
          <Line />
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
