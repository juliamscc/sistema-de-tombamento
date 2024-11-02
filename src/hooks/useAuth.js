import { useState, useEffect, createContext, useContext } from 'react';

// Criando o contexto para autenticação
const AuthContext = createContext();

// Provedor do contexto de autenticação
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // Estado inicial sem usuário logado

  // Simulando um carregamento inicial ou chamada de API para autenticar o usuário
  useEffect(() => {
    // Lógica para buscar dados de autenticação (simulação)
    const loggedUser = { name: 'João', role: 'manager' }; // Exemplo de um usuário logado
    setUser(loggedUser);
  }, []);

  return (
    <AuthContext.Provider value={{ user }}>
      {children}
    </AuthContext.Provider>
  );
};

// Hook personalizado para acessar o contexto de autenticação
export const useAuth = () => {
  return useContext(AuthContext);
};
