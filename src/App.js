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
import { Routes, Route, useLocation } from 'react-router-dom';

function App() {
  const location = useLocation();

  return (
    <div className="App">
      {/* Renderiza o Header apenas se a rota não for "/login" */}
      {location.pathname !== '/login' && <Header />}

      <section className="hero">
        <Routes>
          {/* Rota para o componente Login (exibe apenas o Login) */}
          <Route path="/login" element={<Login />} />

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
