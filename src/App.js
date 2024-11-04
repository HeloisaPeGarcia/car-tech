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
import EditItemForm from './components/Edicao';
import { Routes, Route, useLocation } from 'react-router-dom';

function App() {
  const location = useLocation();
  const isFullScreenRoute = location.pathname === '/estoque' || location.pathname === '/edicao';

  return (
    <div className="App">
      {!isFullScreenRoute && <Header />}

      <section className={`hero ${isFullScreenRoute ? 'full-screen' : ''}`}>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/estoque" element={<Estoque />} />
          <Route path="/edicao" element={<EditItemForm />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/about" element={<Sobre />} />
          <Route path="/form" element={<Form />} />
        </Routes>
      </section>

      {!isFullScreenRoute && location.pathname !== '/login' && (
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
