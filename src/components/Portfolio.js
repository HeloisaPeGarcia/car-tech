import React from "react";
import '../App.css';

function Portfolio() {
  return (
    <div id="Portfolio" className="portfolio-container">
      <header className="portfolio-header">
      </header>
      <section className="examples-section">
        <h2>Exemplos</h2>
        <div className="examples-grid">
          <div className="example-card">
            <img src="https://cfx-wp-images.imgix.net/2021/12/Car-Paint-Protection.jpg?auto=compress%2Cformat&ixlib=php-3.3.1&s=530410d30204e99a6f42864be8b0206e" alt="Pintura metálica" />
            <h3>Pintura metálica</h3>
            <p>
              A grande vantagem dessa opção é que ela reflete mais a luz e sempre
              passa a impressão de um carro mais brilhante e limpo.
            </p>
          </div>
          <div className="example-card">
            <img src="https://p.turbosquid.com/ts-thumb/QC/BqoI0l/G2iiQWLd/aww/png/1589954034/600x600/fit_q87/78017381464ba3a0a513dbd4a30ff250e54d8035/aww.jpg" alt="Body kit" />
            <h3>Body kit</h3>
            <p>
              Alterações exteriores aplicadas à aerodinâmica, tipicamente compostas
              por para-choques, diâmetros e traseiros, spoilers.
            </p>
          </div>
          <div className="example-card">
            <img src="https://ae01.alicdn.com/kf/S84ae67daeeb84cdbb0cde3b55b98d9b4F.jpg_960x960.jpg" alt="Fitas de Led" />
            <h3>Fitas de Led</h3>
            <p>
              Inserir fita em LED automotiva e transformar o visual do seu carro.
            </p>
          </div>
          <div className="example-card">
            <img src="https://ae01.alicdn.com/kf/Se8a602bdf496454db5faac7cd95c9bd9C/Adesivo-de-corrida-de-carro-universal-adesivo-decalque-frontal-esportivo-com-listras-estilo-de-carro-para.jpg" alt="Adesivo esportivo" />
            <h3>Adesivo esportivo</h3>
            <p>
              Adesivos e sprays para customizar seu carro, são opções criativas e
              acessíveis para melhorar o visual do seu carro.
            </p>
          </div>
          <div className="example-card">
            <img src="https://declatrack.com.br/wp-content/uploads/2020/10/POST_CARRO_REBAIXADO.png" alt="Rebaixamento" />
            <h3>Rebaixamento</h3>
            <p>
              Ter um carro rebaixado é uma das modificações mais conhecidas e queridas
              por muitos entusiastas de carros.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Portfolio;
