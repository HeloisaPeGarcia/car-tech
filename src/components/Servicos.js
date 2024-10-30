// src/components/Servicos.js
import React from 'react';
import '../App.css';

function Servicos() {
  return (
    <section id="services" className="services">
      <h2>Serviços Oferecidos</h2>
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

export default Servicos;
