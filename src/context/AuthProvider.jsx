import { useState } from "react";
import { AuthContext } from "./AuthContext";

function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    return localStorage.getItem("isAuthenticated") === "true";
  });

  function login() {
    localStorage.setItem("isAuthenticated", "true");
    setIsAuthenticated(true);
  }
  function logout() {
    localStorage.removeItem("isAuthenticated");
    setIsAuthenticated(false);
  }
  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
