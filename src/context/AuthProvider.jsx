import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";
import { getLocalStorage } from "../utils/localStorage";

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const { employees, admin } = getLocalStorage();
    setInterval(() => {
      setUserData({ employees, admin });
    }, 100);
  }, []);

  return (
    <div>
      <AuthContext.Provider value={userData}>{children}</AuthContext.Provider>
    </div>
  );
}
