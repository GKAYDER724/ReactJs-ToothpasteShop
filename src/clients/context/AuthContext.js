import React, { createContext, useState, useContext } from "react";

// Tạo AuthContext
export const AuthContext = createContext();

// Tạo AuthProvider để bọc các component con
export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};

// Tạo hook để sử dụng AuthContext dễ dàng hơn
export const useAuth = () => useContext(AuthContext);