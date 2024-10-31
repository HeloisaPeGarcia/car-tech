import React, { useState } from 'react';


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

  const handleEdit = (id) => {
    // Lógica para editar o item
    console.log('Edit item:', id);
  };

  const handleDelete = (id) => {
    setItems(items.filter(item => item.id !== id));
  };

  return (
    <div className="inventory-management">
      <h2>Gerenciamento de Estoque</h2>
      <div className="filters">
        <input
          type="text"
          name="keyword"
          placeholder="Palavra-chave"
          value={filters.keyword}
          onChange={handleFilterChange}
        />
        <input
          type="number"
          name="minPrice"
          placeholder="Preço mínimo"
          value={filters.minPrice}
          onChange={handleFilterChange}
        />
        <input
          type="number"
          name="maxPrice"
          placeholder="Preço máximo"
          value={filters.maxPrice}
          onChange={handleFilterChange}
        />
        <select name="color" value={filters.color} onChange={handleFilterChange}>
          <option value="">Cor</option>
          <option value="Preto">Preto</option>
          <option value="Branco">Branco</option>
          <option value="Cinza">Cinza</option>
        </select>
        <select name="brand" value={filters.brand} onChange={handleFilterChange}>
          <option value="">Marca</option>
          <option value="BMW">BMW</option>
          <option value="AUDI">AUDI</option>
          <option value="PORSCHE">PORSCHE</option>
        </select>
      </div>
      <div className="inventory-list">
        {filteredItems.map(item => (
          <div key={item.id} className="inventory-item">
            <h3>{item.name}</h3>
            <p>Preço: R$ {item.price}</p>
            <p>Cor: {item.color}</p>
            <p>Marca: {item.brand}</p>
            <button onClick={() => handleEdit(item.id)}>Editar</button>
            <button onClick={() => handleDelete(item.id)}>Excluir</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default InventoryManagement;
