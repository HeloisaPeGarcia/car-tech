import React from 'react';


function TestimonialSection() {
  const testimonials = [
    {
      name: 'Ana Silva',
      title: '★★★★★',
      quote: 'Meu carro ficou como novo! Serviço excelente e atendimento impecável.',
      image: 'https://via.placeholder.com/150',
    },
    {
      name: 'Bruno Santos',
      title: '★★★★★',
      quote: 'A customização esportiva ficou incrível. Recomendo a todos!',
      image: 'https://via.placeholder.com/150',
    },
    {
      name: 'Matheus Ferraz',
      title: '★★★★★',
      quote: 'A revisão foi rápida e eficiente. Muito satisfeito com o serviço.',
      image: 'https://via.placeholder.com/150',
    },
  ];

  return (
    <div className="testimonial-section">
      <h2 color='#ffff'>Depoimentos</h2>
      <div className="testimonial-cards">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial-card">
            <img src={testimonial.image} alt={testimonial.name} className="testimonial-image" />
            <h3>{testimonial.name}</h3>
            <h4>{testimonial.title}</h4>
            <p>"{testimonial.quote}"</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TestimonialSection;
