import React from 'react';


function TestimonialSection() {
  const testimonials = [
    {
      name: 'Ana Silva',
      title: '★★★★★',
      quote: 'Meu carro ficou como novo! Serviço excelente e atendimento impecável.',
      image: 'https://cdn.icon-icons.com/icons2/3708/PNG/512/girl_female_woman_person_face_people_curly_hair_icon_230020.png',
    },
    {
      name: 'Bruno Santos',
      title: '★★★★★',
      quote: 'A customização esportiva ficou incrível. Recomendo a todos!',
      image: 'https://cdn-icons-png.flaticon.com/512/4128/4128196.png',
    },
    {
      name: 'Matheus Ferraz',
      title: '★★★★★',
      quote: 'A revisão foi rápida e eficiente. Muito satisfeito com o serviço.',
      image: 'https://icons-for-free.com/iff/png/512/business+face+people+icon-1320086457520622872.png',
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
