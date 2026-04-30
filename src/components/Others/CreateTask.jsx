import { useContext } from "react";
import { useState } from "react";
import { AuthContext } from "../../context/AuthProvider";

export default function CreateTask() {

  const [userData, setUserData] = useContext(AuthContext);

  const [taskTitle, setTaskTitle] = useState("");
  const [taskDesc, setTaskDesc] = useState("");
  const [taskDate, setTaskDate] = useState("");
  const [assignTo, setAssignTo] = useState("");
  const [category, setCategory] = useState("");

  const [newTask, setNewTask] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();

    setNewTask({ taskTitle, taskDesc, taskDate, category, active: false, newTask: true, failed: false, completed: false });

    // const data = JSON.parse(localStorage.getItem('employees'));
    // console.log(data);
    const data = userData.employees;
    console.log(userData);

    data.forEach(function (elem) {
      // console.log('hello');
      if (assignTo == elem.firstName) {
        console.log('yahi hai');
        elem.tasks.push(newTask);
        elem.taskCounts.newTask(elem.taskCounts.newTask + 1);
      }
    });

    // localStorage.setItem('employees', JSON.stringify(data));
    setUserData({ ...userData.employees, data });
    
    setTaskTitle("");
    setTaskDate("");
    setTaskDesc("");
    setAssignTo("");
    setCategory("");
  }
  
  return (
    <div className="p-5 bg-[#1c1c1c] mt-7 rounded-sm">
      <form onSubmit={submitHandler} className="flex flex-wrap w-full items-start justify-between">
        <div className="w-1/2">
          <div>
            <h3 className="text-sm text-gray-300 mb-0.5">Task Title</h3>
            <input
              className="text-sm py-1 px-2 w-4/5 rounded-sm outline-none bg-transparent border border-gray-400 mb-4"
              type="text"
              placeholder="Make a UI design"
              value={taskTitle}
              onChange={(e) => setTaskTitle(e.target.value)}
            />
          </div>
          <div>
            <h3 className="text-sm text-gray-300 mb-0.5">Date</h3>
            <input
              className="text-sm py-1 px-2 w-4/5 rounded-sm outline-none bg-transparent border border-gray-400 mb-4"
              type="date"
              value={taskDate}
              onChange={(e) => setTaskDate(e.target.value)}
            />
          </div>

          <div>
            <h3 className="text-sm text-gray-300 mb-0.5">Assign to</h3>
            <input
              className="text-sm py-1 px-2 w-4/5 rounded-sm outline-none bg-transparent border border-gray-400 mb-4"
              type="text"
              placeholder="Enter an employee name"
              value={assignTo}
              onChange={(e) => setAssignTo(e.target.value)}
            />
          </div>

          <div>
            <h3 className="text-sm text-gray-300 mb-0.5">Category</h3>
            <input
              className="text-sm py-1 px-2 w-4/5 rounded-sm outline-none bg-transparent border border-gray-400 mb-4"
              type="text"
              placeholder="design, dev, etc"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            />
          </div>
        </div>

        <div className="w-1/2">
          <div>
            <h3 className="text-sm text-gray-300 mb-0.5">Description</h3>
            <textarea
              className="text-sm py-1 px-2 w-4/5 rounded-sm outline-none bg-transparent border border-gray-400 mb-4"
              name=""
              id=""
              cols="30"
              rows="10"
              value={taskDesc}
              onChange={(e) => setTaskDesc(e.target.value)}
            />

            <button className="bg-emerald-500 py-3 hover:bg-emerald-600 px-5 rounded-sm text-sm mt-4 w-full">
              Create Task
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
