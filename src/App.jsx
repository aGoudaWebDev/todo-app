import { useEffect, useState } from "react";

import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";

import useLocalStorage from "./hooks/useLocalStorage";
import FilterButtonsList from "./components/FilterButtonsList";

export default function App() {
   const [filter, setFilter] = useState("all");
   const [tasks, setTasks] = useLocalStorage("tasks", []);
   const [theme, setTheme] = useLocalStorage("theme", "light");

   useEffect(() => {
      document.documentElement.className = theme;
   }, [theme]);

   const addTask = (text) => {
      setTasks([...tasks, { id: Date.now(), text, completed: false }]);
   };

   const toggleTask = (id) => {
      setTasks(
         tasks.map((task) =>
            task.id === id ? { ...task, completed: !task.completed } : task
         )
      );
   };

   const deleteTask = (id) => setTasks(tasks.filter((task) => task.id !== id));

   const filteredTasks = tasks.filter((task) => {
      if (filter === "active") return !task.completed;
      if (filter === "completed") return task.completed;
      return true;
   });

   return (
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex items-center justify-center transition-all duration-300">
         <div className="bg-white dark:bg-gray-800 dark:text-white rounded-2xl shadow-xl p-6 max-w-md w-full">
            <button
               onClick={() => setTheme(theme === "light" ? "dark" : "light")}
               className="px-3 py-1 text-sm rounded-lg border"
            >
               {theme === "light" ? "🌙 Dark" : "☀️ Light"}
            </button>
            <h1 className="text-2xl font-bold mb-4 text-center">
               To-Do App ✅
            </h1>
            <TaskInput addTask={addTask} />
            <FilterButtonsList activeFilter={filter} onFilter={setFilter} />
            <TaskList
               tasks={filteredTasks}
               onToggleTask={toggleTask}
               onDeleteTask={deleteTask}
            />
         </div>
      </div>
   );
}
