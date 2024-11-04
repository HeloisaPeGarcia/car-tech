// CadastroFerramenta.js
import React, { useState } from 'react';

function CadastroFerramenta() {
  const [formData, setFormData] = useState({
    categoria: '',
    nome_ferramenta: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você pode enviar os dados do formulário para uma API
    console.log(formData);
    alert('Ferramenta cadastrada com sucesso!');
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Cadastro de Ferramenta</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <label style={styles.label}>
          Categoria:
          <input
            type="text"
            name="categoria"
            value={formData.categoria}
            onChange={handleChange}
            style={styles.input}
          />
        </label>
        <label style={styles.label}>
          Nome da Ferramenta:
          <input
            type="text"
            name="nome_ferramenta"
            value={formData.nome_ferramenta}
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
    backgroundColor: '#333333', // Cinza escuro
    color: '#ffffff', // Texto branco
    padding: '20px',
    borderRadius: '8px',
    width: '300px',
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

export default CadastroFerramenta;
