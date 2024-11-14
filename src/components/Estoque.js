import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';



function InventoryManagement() {
  const [items, setItems] = useState([]);
  const [filters, setFilters] = useState({
    keyword: '',
    color: '',
    brand: '',
  });

  const navigate = useNavigate();

  useEffect(() => {
    fetch('http://localhost:4000/api/ferramentas')
      .then((response) => response.json())
      .then((data) => setItems(data))
      .catch((error) => console.error('Erro ao buscar ferramentas:', error));
  }, []);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
  };

  const filteredItems = items.filter(item => {
    return (
      item.nome_ferramenta.toLowerCase().includes(filters.keyword.toLowerCase())
    );
  });

  const handleEdit = (item) => {
    navigate('/edicao', { state: { item } });
  };

  const handleDelete = (id_ferramenta) => {
    setItems(items.filter(item => item.id_ferramenta !== id_ferramenta));
  };

  return (
    <div className="inventory-management">
      <Navbar />
      <aside className="filters">
        <input
          type="text"
          name="keyword"
          placeholder="Buscar ferramenta..."
          value={filters.keyword}
          onChange={handleFilterChange}
        />
      </aside>
      <div className="inventory-items">
        {filteredItems.map(item => (
          <div key={item.id_ferramenta} className="inventory-item">
            <h4>{item.nome_ferramenta}</h4>
            <p>Categoria: {item.categoria}</p>
            <button onClick={() => handleEdit(item)}>✏️</button>
            <button onClick={() => handleDelete(item.id_ferramenta)}>❌</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default InventoryManagement;