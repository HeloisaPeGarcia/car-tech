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
import { Routes, Route, Link } from 'react-router-dom'; // Adicione o Link

function App() {
  return (
    <div className="App">
      <Header />
      <section className="hero">
        <Routes>
          <Route path="/Portfolio" element={<Portfolio />} />
          <Route path="/Form" element={<Form />} />
          {/* Rota padrão () */}
        
        </Routes>
      </section>
      <div> <Sobre /> </div>
      <Line />
      <Servicos/>
      <Line />
      <div> <Avaliacao /> </div>
    
      <Portfolio/>
      <Line />
      <Footer />
    </div>
  );
}

export default App;
