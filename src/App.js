// src/App.js
import React from 'react';
import './App.css';
import Header from './components/Header';
import Servicos from './components/Servicos';
import Line from './components/Line';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <section className="hero">
        {/* Conteúdo da seção hero */}
      </section>
      <Servicos />
      <Line />
      <Footer />
    </div>
  );
}

export default App;
