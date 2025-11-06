import { motion } from "framer-motion";

export default function TaskItem({ task, toggleTask, deleteTask }) {
   return (
      <motion.div
         initial={{ opacity: 0, y: 10 }}
         animate={{ opacity: 1, y: 0 }}
         exit={{ opacity: 0, x: -50 }}
         transition={{ duration: 0.5 }}
         className="
            flex items-center justify-between bg-gray-100 p-2 rounded-lg mb-2
            dark:bg-gray-800 dark:text-gray-100
          "
      >
         <span
            onClick={() => toggleTask(task.id)}
            className={`cursor-pointer ${
               task.completed ? "line-through text-gray-500" : ""
            }`}
         >
            {task.text}
         </span>
         <button
            onClick={() => deleteTask(task.id)}
            className="text-red-600 font-bold"
         >
            ✕
         </button>
      </motion.div>
   );
}
