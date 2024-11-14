// CadastroAgendamento.js
import React, { useState } from 'react';

function Agendamento() {
  const [formData, setFormData] = useState({
    id_servico: '',
    id_adm: '',
    nome_cliente: '',
    contato_cliente: '',
    data_agendamento: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você pode enviar os dados do formulário para uma API
    console.log(formData);
    alert('Agendamento registrado com sucesso!');
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Cadastro de Agendamento</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <label style={styles.label}>
          Nome do Cliente:
          <input
            type="text"
            name="nome_cliente"
            value={formData.nome_cliente}
            onChange={handleChange}
            style={styles.input}
          />
        </label>
        <label style={styles.label}>
          Contato do Cliente:
          <input
            type="text"
            name="contato_cliente"
            value={formData.contato_cliente}
            onChange={handleChange}
            style={styles.input}
          />
        </label>
        <label style={styles.label}>
          Data do Agendamento:
          <input
            type="date"
            name="data_agendamento"
            value={formData.data_agendamento}
            onChange={handleChange}
            style={styles.input}
          />
        </label>
        <button type="submit" style={styles.button}>Cadastrar</button>
      </form>
    </div>
  );
}

const styles = {
  container: {
    width: '100%',
    height: '100%',
    position: 'fixed',
    backgroundColor: '#333333', // Cinza escuro
    color: '#ffffff', // Texto branco
    padding: '20px',
    borderRadius: '8px',
    margin: '0 auto',
  },
  title: {
    textAlign: 'center',
    marginBottom: '20px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  label: {
    marginBottom: '10px',
  },
  input: {
    padding: '8px',
    borderRadius: '4px',
    border: '1px solid #ccc',
    marginBottom: '15px',
  },
  button: {
    padding: '10px',
    borderRadius: '4px',
    border: 'none',
    backgroundColor: '#555555',
    color: '#ffffff',
    cursor: 'pointer',
  },
};

export default Agendamento;
