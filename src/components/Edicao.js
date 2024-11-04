import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function EditItemForm() {
  const location = useLocation();
  const navigate = useNavigate();
  const item = location.state?.item;

  useEffect(() => {
    if (!item) {
      // Redireciona para a página de estoque se não houver item para editar
      navigate('/estoque');
    }
  }, [item, navigate]);

  const [formData, setFormData] = useState({ ...item });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você pode salvar as alterações e redirecionar de volta para o estoque
    navigate('/estoque');
  };

  if (!item) {
    return null; // Evita renderizar o formulário se não houver item
  }

  const styles = {
    editItemForm: {
      backgroundColor: '#333', // Fundo cinza escuro
      color: 'white', // Texto branco
      border: '1px solid #fff', // Borda branca
      borderRadius: '8px',
      padding: '20px',
      maxWidth: '400px',
      margin: '20px auto',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    },
    h2: {
      marginBottom: '20px',
      fontSize: '24px',
      color: '#fff', // Texto branco
    },
    form: {
      display: 'flex',
      flexDirection: 'column',
    },
    input: {
      marginBottom: '10px',
      padding: '10px',
      border: '1px solid #fff', // Borda branca
      borderRadius: '4px',
      backgroundColor: '#444', // Fundo cinza escuro
      color: '#fff', // Texto branco
      fontSize: '16px',
    },
    button: {
      padding: '10px 15px',
      border: 'none',
      borderRadius: '4px',
      fontSize: '16px',
      cursor: 'pointer',
      marginTop: '10px',
    },
    submitButton: {
      backgroundColor: '#4CAF50', // Verde
      color: 'white',
    },
    cancelButton: {
      backgroundColor: '#f44336', // Vermelho
      color: 'white',
      marginLeft: '10px',
    },
  };

  return (
    <div style={styles.editItemForm}>
      <h2 style={styles.h2}>Editar Item</h2>
      <form style={styles.form} onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          style={styles.input}
        />
        <input
          type="number"
          name="price"
          value={formData.price}
          onChange={handleChange}
          style={styles.input}
        />
        <input
          type="text"
          name="color"
          value={formData.color}
          onChange={handleChange}
          style={styles.input}
        />
        <input
          type="text"
          name="brand"
          value={formData.brand}
          onChange={handleChange}
          style={styles.input}
        />
        <button type="submit" style={{ ...styles.button, ...styles.submitButton }}>Salvar</button>
        <button type="button" onClick={() => navigate('/estoque')} style={{ ...styles.button, ...styles.cancelButton }}>Cancelar</button>
      </form>
    </div>
  );
}

export default EditItemForm;
