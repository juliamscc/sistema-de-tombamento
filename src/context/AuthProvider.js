// src/context/AuthProvider.js

import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [userType, setUserType] = useState(null); // null, 'admin' ou 'user'

  const login = (type) => {
    setUserType(type);
  };

  const logout = () => {
    setUserType(null);
  };

  return (
    <AuthContext.Provider value={{ userType, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
