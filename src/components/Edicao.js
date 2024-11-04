import React, { useState } from 'react';
import InventoryManagement from './Estoque'; // Certifique-se de que o caminho está correto
import '../App.css';

function EditItemForm({ item, onSave, onCancel }) {
  const [formData, setFormData] = useState({ ...item });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <div className="edit-item-form">
      <h2>Editar Item</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        <input
          type="number"
          name="price"
          value={formData.price}
          onChange={handleChange}
        />
        <input
          type="text"
          name="color"
          value={formData.color}
          onChange={handleChange}
        />
        <input
          type="text"
          name="brand"
          value={formData.brand}
          onChange={handleChange}
        />
        <button type="submit">Salvar</button>
        <button type="button" onClick={onCancel}>Cancelar</button>
      </form>
    </div>
  );
}

export default EditItemForm;
