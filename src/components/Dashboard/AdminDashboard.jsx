import AllTask from "../Others/AllTask";
import CreateTask from "../Others/CreateTask";
import Header from "../Others/Header";

export default function AdminDashboard(props) {
  return (
    <div className="p-10 h-screen w-full">
      <Header changedUser={props.changedUser} />
      <CreateTask />
      <AllTask />
    </div>
  );
}
