import React, { useState } from 'react';
import Navbar from './Navbar';

const CadastrarServico = () => {
  const [modelo, setModelo] = useState('');
  const [servico, setServico] = useState('');
  const [descricao, setDescricao] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica para cadastrar o serviço
    console.log('Modelo:', modelo);
    console.log('Serviço:', servico);
    console.log('Descrição:', descricao);
  };

  return (
    <div>
      <Navbar />
      <div style={styles.container}>
        <h1 style={styles.title}>Cadastrar Serviço</h1>
        <form onSubmit={handleSubmit} style={styles.form}>
          <div style={styles.formGroup}>
            <label style={styles.label}>Modelo</label>
            <input
              type="text"
              value={modelo}
              onChange={(e) => setModelo(e.target.value)}
              style={styles.input}
            />
          </div>
          <div style={styles.formGroup}>
            <label style={styles.label}>Selecione o serviço</label>
            <select
              value={servico}
              onChange={(e) => setServico(e.target.value)}
              style={styles.select}
            >
              <option value="">Selecione o serviço</option>
              <option value="servico1">Serviço 1</option>
              <option value="servico2">Serviço 2</option>
              <option value="servico3">Serviço 3</option>
            </select>
          </div>
          <div style={styles.formGroup}>
            <label style={styles.label}>Adicione uma descrição</label>
            <textarea
              value={descricao}
              onChange={(e) => setDescricao(e.target.value)}
              style={styles.textarea}
            />
          </div>
          <button type="submit" style={styles.button}>Cadastrar</button>
        </form>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#333',
    color: '#fff',
    padding: '20px',
    borderRadius: '8px',
    width: '300px',
    margin: '0 auto',
  },
  title: {
    marginBottom: '20px',
  },
  form: {
    width: '100%',
  },
  formGroup: {
    marginBottom: '15px',
  },
  label: {
    display: 'block',
    marginBottom: '5px',
  },
  input: {
    width: '100%',
    padding: '8px',
    borderRadius: '4px',
    border: '1px solid #ccc',
  },
  select: {
    width: '100%',
    padding: '8px',
    borderRadius: '4px',
    border: '1px solid #ccc',
  },
  textarea: {
    width: '100%',
    padding: '8px',
    borderRadius: '4px',
    border: '1px solid #ccc',
    height: '80px',
  },
  button: {
    width: '100%',
    padding: '10px',
    borderRadius: '4px',
    border: 'none',
    backgroundColor: '#fff',
    color: '#333',
    cursor: 'pointer',
  },
};

export default CadastrarServico;
