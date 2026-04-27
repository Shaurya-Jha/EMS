import { useEffect } from "react"
import Login from "./components/Auth/Login"
import AdminDashboard from "./components/Dashboard/AdminDashboard"
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard"
import { setLocalStorage } from "./utils/localStorage";
import { useState } from "react";
import { useContext } from "react";
import { AuthContext } from "./context/AuthProvider";

function App() {
  
  // state management
  const [user, setUser] = useState(null);
  
  const authData = useContext(AuthContext);
  console.log("auth context data: ", authData.employees);
  
  const handleLogin = (email, password) => {
    if (authData && authData.admin.find((a) => email === a.email && password === a.password)) {
      setUser("admin")
    } else if (authData && authData.employees.find((e) => email === e.email && e.password === password)) {
      setUser("employee")
    } else {
      console.log("invalid credentials")
    }
  }
  
  useEffect(() => {
    // clear any old local storage data on mount
    localStorage.clear();
    // set new data on mount after clearing old data
    setLocalStorage();
  }, []);

  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : ""}
      
      {user == "admin" ? <AdminDashboard /> : <EmployeeDashboard />}
    </>
  )
}

export default App
