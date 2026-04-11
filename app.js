import { useState } from "react";
import "./styles.css";

export default function App() {
  const [input, setInput] = useState("");
  const [tasks, setTasks] = useState([]);

  function addTask() {
    if (!input.trim()) return;

    const newTask = {
      id: Date.now(),
      text: input,
      completed: false,
    };

    setTasks([...tasks, newTask]);
    setInput("");
  }

  function toggleTask(id) {
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        return { ...task, completed: !task.completed };
      }
      return task;
    });
    setTasks(updatedTasks);
  }

  return (
    <div className="App">
      <h1>Daily Focus</h1>

      <div className="input-section">
        <input
          placeholder="Add a task..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={addTask}>Add</button>
      </div>

      <ul className="task-list">
        {tasks.map((task) => (
          <li
            key={task.id}
            onClick={() => toggleTask(task.id)}
            style={{
              textDecoration: task.completed ? "line-through" : "none",
              cursor: "pointer",
            }}
          >
            {task.text}
          </li>
        ))}
      </ul>
    </div>
  );
}
