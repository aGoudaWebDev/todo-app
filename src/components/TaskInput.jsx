import { useState } from "react";

export default function TaskInput({ addTask }) {
   const [task, setTask] = useState("");

   const handleSubmit = (e) => {
      e.preventDefault();
      if (!task.trim()) return;
      addTask(task);
      setTask("");
   };

   return (
      <form onSubmit={handleSubmit} className="flex gap-2 mb-4">
         <input
            type="text"
            className="
              w-full border border-gray-300 rounded-lg p-2   
              focus:outline-none focus:ring focus:ring-indigo-400
              bg-white text-gray-800 placeholder-gray-500

              dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100 dark:placeholder-gray-300
              dark:focus:ring-indigo-500
            "
            placeholder="Add a task..."
            value={task}
            onChange={(e) => setTask(e.target.value)}
         />
         <button
            className="
              bg-indigo-600 text-white w-20 py-2 rounded-lg 
              hover:bg-indigo-700 transition 

              dark:bg-indigo-500 dark:hover:bg-indigo-400
            "
         >
            Add
         </button>
      </form>
   );
}
