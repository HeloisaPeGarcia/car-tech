import React, { useState } from 'react';

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
    <div style={styles.backdrop}>
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
  backdrop: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    backgroundColor: 'rgba(0, 0, 0, 0.8)', // Fundo escuro que cobre a tela inteira
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1000, // Certifique-se de que o modal esteja à frente de tudo
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#333',
    color: '#fff',
    padding: '20px',
    borderRadius: '8px',
    width: '90%',
    maxWidth: '400px',
    boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.5)',
  },
  title: {
    marginBottom: '20px',
    fontSize: '1.5em',
    color: '#fff',
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
    color: '#ccc',
  },
  input: {
    width: '100%',
    padding: '8px',
    borderRadius: '4px',
    border: '1px solid #555',
    backgroundColor: '#222',
    color: '#fff',
  },
  select: {
    width: '100%',
    padding: '8px',
    borderRadius: '4px',
    border: '1px solid #555',
    backgroundColor: '#222',
    color: '#fff',
  },
  textarea: {
    width: '100%',
    padding: '8px',
    borderRadius: '4px',
    border: '1px solid #555',
    backgroundColor: '#222',
    color: '#fff',
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
    fontWeight: 'bold',
  },
};

export default CadastrarServico;
