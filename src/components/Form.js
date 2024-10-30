import React from "react";
import '../App.css';


function Form() {
  return (
    <div>
     
      <div className="form-container">
        <h1>Formulário</h1>
        <form className="form-content">
          <div className="form-group">
            <label>Nome</label>
            <input type="text" placeholder="Nome" />
          </div>
          <div className="form-group">
            <label>Sobrenome</label>
            <input type="text" placeholder="Sobrenome" />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input type="email" placeholder="Email" />
          </div>
          <div className="form-group">
            <label>Mensagem</label>
            <textarea placeholder="Mensagem"></textarea>
          </div>
          <button type="submit">Enviar</button>
        </form>
      </div>

    </div>
  );
}

export default Form;
