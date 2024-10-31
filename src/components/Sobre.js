// components/SobreMecanico.js
import React from 'react';

function SobreMecanico() {
  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Sobre o Mecânico</h2>
      <p style={styles.description}>
        Meu nome é Miguel Santos, sou mecânico automotivo com mais de 10 anos de experiência na área. 
        Especializo-me em serviços de manutenção e reparo de veículos, incluindo troca de óleo, 
        diagnósticos de falhas e reparos em sistemas elétricos e mecânicos. 
        Meu compromisso é garantir a segurança e o desempenho do seu carro.
      </p>
      <h3 style={styles.specialtiesTitle}>Especialidades:</h3>
      <ul style={styles.list}>
        <li>Manutenção preventiva</li>
        <li>Reparos em motores</li>
        <li>Sistemas de transmissão</li>
        <li>Suspensão e direção</li>
        <li>Diagnóstico computacional</li>
      </ul>
    </div>
  );
}

const styles = {
  container: {
    backgroundColor: '#fff',
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '20px',
    margin: '10px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  },
  title: {
    marginBottom: '10px',
    fontSize: '24px',
    color: '#333',
  },
  description: {
    marginBottom: '10px',
    color: '#666',
    fontSize: '16px',
  },
  specialtiesTitle: {
    marginTop: '20px',
    fontSize: '20px',
    color: '#333',
  },
  list: {
    listStyleType: 'disc',
    paddingLeft: '20px',
  },
};

export default SobreMecanico;
