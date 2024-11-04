import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Edicao from './Edicao';

function InventoryManagement() {
  const [items, setItems] = useState([
    { id: 1, name: 'Tinta spray preto metálico', price: 46, color: 'Preto', brand: 'BMW' },
    { id: 2, name: 'Pastilha De Freio', price: 90, color: 'Cinza', brand: 'AUDI' },
    { id: 3, name: 'Aerofolio Civic', price: 42, color: 'Preto', brand: 'PORSCHE' },
    { id: 4, name: 'Rodas aro 17', price: 135, color: 'Branco', brand: 'BMW' },
    { id: 5, name: 'Roda esportiva aro 20', price: 135, color: 'Cinza', brand: 'AUDI' },
    { id: 6, name: 'Suspensão corsa', price: 122, color: 'Preto', brand: 'PORSCHE' },
  ]);

  const [filters, setFilters] = useState({
    keyword: '',
    minPrice: 0,
    maxPrice: 1000,
    color: '',
    brand: '',
  });

  const [editingItem, setEditingItem] = useState(null);
  const navigate = useNavigate();

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
  };

  const filteredItems = items.filter(item => {
    return (
      item.name.toLowerCase().includes(filters.keyword.toLowerCase()) &&
      item.price >= filters.minPrice &&
      item.price <= filters.maxPrice &&
      (filters.color ? item.color === filters.color : true) &&
      (filters.brand ? item.brand === filters.brand : true)
    );
  });

  const handleEdit = (item) => {
    navigate('/edicao', { state: { item } });
  };

  const handleDelete = (id) => {
    setItems(items.filter(item => item.id !== id));
  };

  const handleSave = (updatedItem) => {
    setItems(items.map(item => (item.id === updatedItem.id ? updatedItem : item)));
    setEditingItem(null);
  };

  const styles = {
    inventoryManagement: {
      backgroundColor: '#333',
      color: 'white',
      padding: '20px',
      border: '1px solid white',
      borderRadius: '8px',
    },
    filters: {
      input: {
        margin: '5px',
        padding: '10px',
        border: '1px solid white',
        borderRadius: '4px',
        backgroundColor: '#444',
        color: 'white',
      },
      select: {
        margin: '5px',
        padding: '10px',
        border: '1px solid white',
        borderRadius: '4px',
        backgroundColor: '#444',
        color: 'white',
      },
    },
    inventoryList: {
      marginTop: '20px',
    },
    inventoryItem: {
      backgroundColor: '#333',
      border: '1px solid white',
      borderRadius: '8px',
      padding: '20px',
      marginBottom: '10px',
    },
    inventoryItemText: {
      margin: '5px 0',
    },
    button: {
      marginRight: '10px',
      padding: '10px 15px',
      border: 'none',
      borderRadius: '4px',
      backgroundColor: '#555',
      color: 'white',
      cursor: 'pointer',
    },
    buttonHover: {
      backgroundColor: '#666',
    },
  };

  return (
    <div style={styles.inventoryManagement}>
      <h2>Gerenciamento de Estoque</h2>
      <div className="filters">
        <input
          type="text"
          name="keyword"
          placeholder="Palavra-chave"
          value={filters.keyword}
          onChange={handleFilterChange}
          style={styles.filters.input}
        />
        <input
          type="number"
          name="minPrice"
          placeholder="Preço mínimo"
          value={filters.minPrice}
          onChange={handleFilterChange}
          style={styles.filters.input}
        />
        <input
          type="number"
          name="maxPrice"
          placeholder="Preço máximo"
          value={filters.maxPrice}
          onChange={handleFilterChange}
          style={styles.filters.input}
        />
        <select name="color" value={filters.color} onChange={handleFilterChange} style={styles.filters.select}>
          <option value="">Cor</option>
          <option value="Preto">Preto</option>
          <option value="Branco">Branco</option>
          <option value="Cinza">Cinza</option>
        </select>
        <select name="brand" value={filters.brand} onChange={handleFilterChange} style={styles.filters.select}>
          <option value="">Marca</option>
          <option value="BMW">BMW</option>
          <option value="AUDI">AUDI</option>
          <option value="PORSCHE">PORSCHE</option>
        </select>
      </div>
      <div style={styles.inventoryList}>
        {filteredItems.map(item => (
          <div key={item.id} style={styles.inventoryItem}>
            <h3 style={styles.inventoryItemText}>{item.name}</h3>
            <p style={styles.inventoryItemText}>Preço: R$ {item.price}</p>
            <p style={styles.inventoryItemText}>Cor: {item.color}</p>
            <p style={styles.inventoryItemText}>Marca: {item.brand}</p>
            <button
              onClick={() => handleEdit(item)}
              style={styles.button}
              onMouseOver={(e) => e.currentTarget.style.backgroundColor = styles.buttonHover.backgroundColor}
              onMouseOut={(e) => e.currentTarget.style.backgroundColor = styles.button.backgroundColor}
            >
              Editar
            </button>
            <button
              onClick={() => handleDelete(item.id)}
              style={styles.button}
              onMouseOver={(e) => e.currentTarget.style.backgroundColor = styles.buttonHover.backgroundColor}
              onMouseOut={(e) => e.currentTarget.style.backgroundColor = styles.button.backgroundColor}
            >
              Excluir
            </button>
          </div>
        ))}
      </div>
      {editingItem && (
        <Edicao item={editingItem} onSave={handleSave} onCancel={() => setEditingItem(null)} />
      )}
    </div>
  );
}

export default InventoryManagement;
