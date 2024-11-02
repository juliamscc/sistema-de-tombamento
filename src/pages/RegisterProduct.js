// src/pages/RegisterProduct.js

import React, { useState } from 'react';
import FormInput from '../components/FormInput';

function RegisterProduct() {
  const [productName, setProductName] = useState('');
  const [productLocation, setProductLocation] = useState('');
  const [productCategory, setProductCategory] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // lógica para enviar os dados do produto para o backend
    console.log({
      name: productName,
      location: productLocation,
      category: productCategory
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormInput
        label="Nome do Produto"
        name="productName"
        value={productName}
        onChange={(e) => setProductName(e.target.value)}
        required
      />
      <FormInput
        label="Localização do Produto"
        name="productLocation"
        value={productLocation}
        onChange={(e) => setProductLocation(e.target.value)}
        required
      />
      <FormInput
        label="Categoria do Produto"
        name="productCategory"
        value={productCategory}
        onChange={(e) => setProductCategory(e.target.value)}
        required
      />
      <button type="submit">Registrar Produto</button>
    </form>
  );
}

export default RegisterProduct;
