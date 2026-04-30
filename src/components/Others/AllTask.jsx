import { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

export default function AllTask() {

  const [userData, setUserData] = useContext(AuthContext);
  
  return (
    <div className="p-5 bg-[#1c1c1c] rounded-sm mt-5 overflow-auto">
      <div className="bg-red-400 mb-2 py-2 px-4 flex justify-between rounded-md">
        <h2>Sarthal</h2>
        <h3>Make a UI</h3>
        <h5>Status</h5>
      </div>

      {userData.employees.map((data, idx) => (
        <div index={idx} className="bg-green-400 mb-2 py-2 px-4 flex justify-between rounded-md">
          <h2>{ data.firstName }</h2>
          <h3>{data.taskTitle} </h3>
          <h5>{data.taskCategory}</h5>
        </div>
      ))}
    </div>
  );
}
