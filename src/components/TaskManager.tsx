import { ChangeEvent, FC } from "react";
import useTaskManager from "../hooks/useTaskManager"; // Assurez-vous que le chemin d'importation est correct
import "./TaskManager.css";

export const TaskManager: FC = () => {
 const {
    tasks,
    addTask,
    completeTask,
    updateTask,
    setSearchKeyword,
 } = useTaskManager();

 return (
    <div className="container">
      <h1>Task Manager</h1>

      <div>
        <input
          type="text"
          onChange={(ev) => setSearchKeyword(ev.target.value)}
          placeholder="Search Task"
        />
      </div>

      <div className="task">
        <input
          type="text"
          onChange={(ev) => addTask(ev.target.value)}
          placeholder="Add new task"
        />

        <button onClick={() => addTask("")}>Add Task</button>
      </div>

      <ul className="container">
        {tasks.map((task) => (
          <li key={task.id} className="task">
            <div className="task">
              <input
                type="text"
                placeholder="Add new task"
                value={task.title}
                onChange={(e) => {
                 // Créez un nouvel objet Task avec l'id existant et le nouveau titre
                 const updatedTask = {
                    id: task.id,
                    title: e.target.value,
                 };
                 updateTask(updatedTask);
                }}
              />
              <button onClick={() => completeTask(task.id)}>Done</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
 );
};
