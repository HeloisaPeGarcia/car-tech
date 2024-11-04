import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';


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

  return (
    
    <div className="inventory-management">
        <Navbar />
      <aside className="filters">
        <h3>Palavra chaves</h3>
        <input
          type="text"
          name="keyword"
          placeholder="Search..."
          value={filters.keyword}
          onChange={handleFilterChange}
        />
        <div className="filter-section">
          <label>Preço</label>
          <input
            type="range"
            name="maxPrice"
            min="0"
            max="1000"
            value={filters.maxPrice}
            onChange={handleFilterChange}
          />
        </div>
        <div className="filter-section">
          <label>Cor</label>
          <select name="color" value={filters.color} onChange={handleFilterChange}>
            <option value="">Todas</option>
            <option value="Preto">Preto</option>
            <option value="Branco">Branco</option>
            <option value="Cinza">Cinza</option>
          </select>
        </div>
        <div className="filter-section">
          <label>Marca</label>
          <select name="brand" value={filters.brand} onChange={handleFilterChange}>
            <option value="">Todas</option>
            <option value="BMW">BMW</option>
            <option value="AUDI">AUDI</option>
            <option value="PORSCHE">PORSCHE</option>
          </select>
        </div>
      </aside>
      <div className="inventory-items">
        {filteredItems.map(item => (
          <div key={item.id} className="inventory-item">
            <h4>{item.name}</h4>
            <p>${item.price}</p>
            <button onClick={() => handleEdit(item)}>✏️</button>
            <button onClick={() => handleDelete(item.id)}>❌</button>
          </div>
        ))}
      </div>
    </div>
  );
}

  

  


export default InventoryManagement;
