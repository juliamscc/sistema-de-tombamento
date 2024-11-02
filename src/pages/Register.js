// src/pages/Register.js

import React, { useState } from 'react';
import FormInput from '../components/FormInput';
import { useNavigate } from 'react-router-dom';

function Register() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    const userData = {
      username,
      email,
      password
    };

    try {
      const response = await fetch('/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });

      if (response.ok) {
        navigate('/login'); // Redireciona o usuário para a página de login
      } else {
        console.log('Erro ao registrar o usuário');
      }
    } catch (error) {
      console.error('Erro na solicitação:', error);
    }
  };

  return (
    <form onSubmit={handleRegister}>
      <h1>Registro de Novo Usuário</h1>
      <FormInput
        label="Nome de Usuário"
        name="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        required
      />
      <FormInput
        label="Email"
        name="email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <FormInput
        label="Senha"
        name="password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <button type="submit">Registrar</button>
    </form>
  );
}

export default Register;
