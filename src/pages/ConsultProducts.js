// src/pages/ConsultProducts.js

import React, { useState } from 'react';

function ConsultProducts() {
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    // Função de busca de produtos
  };

  return (
    <div>
      <h1>Consultar Produtos</h1>
      <input
        type="text"
        placeholder="Buscar produto"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={handleSearch}>Buscar</button>
      {/* Resultados de busca aqui */}
    </div>
  );
}

export default ConsultProducts;
