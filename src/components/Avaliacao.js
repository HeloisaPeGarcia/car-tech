// Avaliacoes.js
import React from 'react';
import Avaliacao from './Avaliacao';

function Avaliacoes() { // Renomeado para Avaliacoes
  // Dados de exemplo para as avaliações
  const reviews = [
    {
      rating: 5,
      title: "Excelente Serviço",
      comment: "Fiquei muito satisfeito com o atendimento.",
      reviewer: "João Silva",
      date: "2024-10-30",
    },
    {
      rating: 4,
      title: "Bom trabalho",
      comment: "O serviço foi bom, mas poderia ser mais rápido.",
      reviewer: "Maria Oliveira",
      date: "2024-10-29",
    },
    {
      rating: 3,
      title: "Satisfatório",
      comment: "O serviço atendeu minhas expectativas.",
      reviewer: "Carlos Souza",
      date: "2024-10-28",
    },
    {
      rating: 5,
      title: "Fantástico!",
      comment: "Super recomendo! Serviço de qualidade.",
      reviewer: "Ana Lima",
      date: "2024-10-27",
    },
  ];

  return (
    <div style={styles.container}>
      {reviews.map((review, index) => (
        <Avaliacao 
          key={index}
          rating={review.rating}
          title={review.title}
          comment={review.comment}
          reviewer={review.reviewer}
          date={review.date}
        />
      ))}
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexWrap: 'wrap', // Permite que os cards quebrem a linha se não houver espaço
    justifyContent: 'space-around', // Alinha os cards
    padding: '20px',
  },
};

export default Avaliacoes;
