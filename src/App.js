import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import RegisterProduct from './pages/RegisterProduct';
import ConsultProducts from './pages/ConsultProducts';
import ArchivedProducts from './pages/ArchivedProducts';
import ManageUsers from './pages/ManageUsers';
import { useAuth, AuthProvider } from './hooks/useAuth';

function App() {
  const { user } = useAuth();

  return (
    <Router>
      <Routes>
        {/* Rotas de acesso público */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Rotas protegidas por autenticação */}
        {user ? (
          <>
            <Route path="/" element={<Dashboard />} />
            <Route path="/register-product" element={<RegisterProduct />} />
            <Route path="/consult-products" element={<ConsultProducts />} />
            <Route path="/archived-products" element={<ArchivedProducts />} />
            {user.role === 'manager' && (
              <Route path="/manage-users" element={<ManageUsers />} />
            )}
          </>
        ) : (
          // Redireciona para login se não logado
          <Route path="*" element={<Navigate to="/login" />} />
        )}
      </Routes>
    </Router>
  );
}

// Envolvendo o App com AuthProvider
const RootApp = () => (
  <AuthProvider>
    <App />
  </AuthProvider>
);

export default RootApp;
