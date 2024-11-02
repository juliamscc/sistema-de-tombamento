// src/components/Navbar.js

import React from 'react';
import { Link } from 'react-router-dom';

function Navbar({ userType }) {
  return (
    <nav className="navbar">
      <ul>
        <li><Link to="/">Página Inicial</Link></li>
        <li><Link to="/register-product">Registrar Produto</Link></li>
        <li><Link to="/consult-products">Consultar Produtos</Link></li>
        {userType === 'admin' && (
          <>
            <li><Link to="/manage-users">Gerenciar Usuários</Link></li>
            <li><Link to="/archive-products">Produtos Arquivados</Link></li>
          </>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
