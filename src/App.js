// App.js
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
import CadastrarServico from './components/CadastroServicos';
import Agendamento from './components/Agendamento';
import CadastroFerramenta from './components/CadastroFerramenta';
import { Routes, Route, useLocation } from 'react-router-dom';

function App() {
  const location = useLocation();

  // Rotas que precisam de tela cheia e sem o Header
  const fullScreenRoutes = ['/estoque', '/edicao', '/CadastroFerramenta', '/agendamento', '/CadastrarServico'];
  const isFullScreenRoute = fullScreenRoutes.includes(location.pathname);

  return (
    <div className="App">
      {/* Exibe o Header em todas as rotas, exceto as rotas em tela cheia */}
      {!isFullScreenRoute && <Header />}

      <section className={`hero ${isFullScreenRoute ? 'full-screen' : ''}`}>
        <Routes>
          <Route path="/CadastrarServico" element={<CadastrarServico />} />
          <Route path="/login" element={<Login />} />
          <Route path="/estoque" element={<Estoque />} />
          <Route path="/edicao" element={<EditItemForm />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/about" element={<Sobre />} />
          <Route path="/CadastroFerramenta" element={<CadastroFerramenta />} />
          <Route path="/agendamento" element={<Agendamento />} />
          <Route path="/form" element={<Form />} />
        </Routes>
      </section>

      {/* Exibe o conteúdo adicional nas rotas que não são fullscreen ou login */}
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
