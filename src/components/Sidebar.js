import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

function Sidebar() {
  const { user } = useAuth();

  return (
    <nav>
      <Link to="/">Página inicial</Link>
      <Link to="/register-product">Registrar produto</Link>
      <Link to="/consult-products">Consultar produtos</Link>
      <Link to="/archived-products">Produtos arquivados</Link>
      {user.role === 'manager' && <Link to="/manage-users">Gerenciar usuários</Link>}
    </nav>
  );
}

export default Sidebar;
