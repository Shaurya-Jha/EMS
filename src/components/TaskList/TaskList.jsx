import AcceptTask from "./AcceptTask";

export default function TaskList() {
  return (
    <div
      id="tasklist"
      className="h-[55%] overflow-x-auto flex items-center justify-start gap-5 flex-nowrap py-5 w-full mt-10"
    >
      <AcceptTask />
      
    </div>
  );
}
