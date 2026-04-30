import { useEffect } from "react";
import Login from "./components/Auth/Login";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import { setLocalStorage } from "./utils/localStorage";
import { useState } from "react";
import { useContext } from "react";
import { AuthContext } from "./context/AuthProvider";

function App() {
  // state management
  const [user, setUser] = useState(null);
  const [loggedInUserData, setLoggedInUserData] = useState(null);
  
  const [userData, setUserData] = useContext(AuthContext);

  useEffect(() => {
    const loggedInUser = localStorage.getItem('loggedInUser');
    // console.log('logged in user: ', loggedInUser);

    if (loggedInUser) {
      const userData = JSON.parse(loggedInUser);
      setTimeout(() => {
        setUser(userData.role);
        setLoggedInUserData(userData.data);
      }, 50)
    }
  })

  const handleLogin = (email, password) => {
    if (
      // userData &&
      // userData.admin.find((a) => email === a.email && password === a.password)
      email == 'admin@mail.com' && password == '321'
    ) {
      setUser('admin');
      localStorage.setItem("loggedInUser", JSON.stringify({ role: "admin" }));
    } else if (userData) {
      const employee = userData.employees.find(
        (e) => email == e.email && e.password == password,
      );
      if (employee) {
        setUser("employee");
        setLoggedInUserData(employee);
        localStorage.setItem(
          "loggedInUser",
          JSON.stringify({ role: 'employee', data: employee }),
        );
      }
    } else {
      console.log("invalid credentials");
    }
  };

  useEffect(() => {
    // clear any old local storage data on mount
    localStorage.clear();
    // set new data on mount after clearing old data
    setLocalStorage();
  }, []);

  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : ""}

      {user == "admin" ? <AdminDashboard changedUser={setUser} /> : (user == "employee" ? <EmployeeDashboard changedUser={setUser} data={loggedInUserData} /> : null) }
    </>
  );
}

export default App;
