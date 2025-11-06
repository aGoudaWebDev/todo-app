import { AnimatePresence } from "framer-motion";
import TaskItem from "./TaskItem";

export default function TaskList({ tasks, onToggleTask, onDeleteTask }) {
   return (
      <>
         <AnimatePresence>
            {tasks.map((task) => (
               <TaskItem
                  key={task.id}
                  task={task}
                  toggleTask={onToggleTask}
                  deleteTask={onDeleteTask}
               />
            ))}
         </AnimatePresence>
      </>
   );
}
