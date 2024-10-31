import React from 'react';
import './App.css';
import Header from './components/Header';
import Line from './components/Line';
import Footer from './components/Footer';
import Portfolio from './components/Portfolio';
import Servicos from './components/Servicos';
import Form from './components/Form';
import Avaliacao from './components/Avaliacao';
import Sobre from './components/Sobre'
import Login from './components/Login';
import { Routes, Route } from 'react-router-dom'; // Adicione o Link

function App() {
  return (
    <div className="App">
      <Header />
      <section className="hero">
        <Routes>
        <Route path="#Login" element={<Login />} />
          <Route path="#Portfolio" element={<Portfolio />} />
          <Route path="#about" element={<Sobre />} />
          <Route path="#Form" element={<Form />} />
          {/* Rota padrão () */}
        </Routes>
        <Routes>
        {/* Definindo a rota para o componente Login */}
        <Route path="/login" element={<Login />} />
      </Routes>
      </section>
       < Sobre /> 
       <Line />
       <Servicos/>
       <Line />
       <Avaliacao /> 
      <Portfolio/>
      <Line />
      <Footer />
    </div>
  );
}

export default App;