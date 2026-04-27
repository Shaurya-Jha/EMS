export default function CreateTask() {
  return (
    <div className="p-5 bg-[#1c1c1c] mt-7 rounded-sm">
      <form className="flex flex-wrap w-full items-start justify-between">
        <div className="w-1/2">
          <div>
            <h3 className="text-sm text-gray-300 mb-0.5">Task Title</h3>
            <input
              className="text-sm py-1 px-2 w-4/5 rounded-sm outline-none bg-transparent border border-gray-400 mb-4"
              type="text"
              placeholder="Make a UI design"
            />
          </div>
          <div>
            <h3 className="text-sm text-gray-300 mb-0.5">Date</h3>
            <input
              className="text-sm py-1 px-2 w-4/5 rounded-sm outline-none bg-transparent border border-gray-400 mb-4"
              type="date"
            />
          </div>

          <div>
            <h3 className="text-sm text-gray-300 mb-0.5">Assign to</h3>
            <input
              className="text-sm py-1 px-2 w-4/5 rounded-sm outline-none bg-transparent border border-gray-400 mb-4"
              type="text"
              placeholder="Enter an employee name"
            />
          </div>

          <div>
            <h3 className="text-sm text-gray-300 mb-0.5">Category</h3>
            <input
              className="text-sm py-1 px-2 w-4/5 rounded-sm outline-none bg-transparent border border-gray-400 mb-4"
              type="text"
              placeholder="design, dev, etc"
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
