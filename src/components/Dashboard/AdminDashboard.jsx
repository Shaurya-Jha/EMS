import AllTask from "../Others/AllTask";
import CreateTask from "../Others/CreateTask";
import Header from "../Others/Header";

export default function AdminDashboard() {
  return (
    <div className="p-10 h-screen w-full">
      <Header />
      <CreateTask />
      <AllTask />
    </div>
  );
}
