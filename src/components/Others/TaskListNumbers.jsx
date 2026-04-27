export default function TaskListNumbers () {
  return (
    <div className="flex mt-10 screen justify-between gap-5 text-white">
      <div className="w-[45%] bg-red-400 py-6 px-10 rounded-xl">
        <h2 className="text-2xl font-semibold">1</h2>
        <h3 className="text-xl font-medium">New Task</h3>
      </div>
      
      <div className="w-[45%] bg-blue-400 py-6 px-10 rounded-xl">
        <h2 className="text-2xl font-semibold">3</h2>
        <h3 className="text-xl font-medium">Completed Task</h3>
      </div>
      
      <div className="w-[45%] bg-green-400 py-6 px-10 rounded-xl">
        <h2 className="text-2xl font-semibold">0</h2>
        <h3 className="text-xl font-medium">Accepted Task</h3>
      </div>
      
      <div className="w-[45%] bg-yellow-300 py-6 px-10 rounded-xl">
        <h2 className="text-2xl font-semibold">0</h2>
        <h3 className="text-xl font-medium">Failed Task</h3>
      </div>
    </div>
  )
}