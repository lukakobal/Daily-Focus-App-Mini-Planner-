import { useState } from "react";
import "./styles.css";

export default function App() {
  const [input, setInput] = useState("");

  return (
    <div className="App">
      <h1>Daily Focus</h1>
      <div className="input-section">
        <input
          placeholder="Add a task..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button>Add</button>
        <ul className="task-list">{/* tasks will appear here */}</ul>
      </div>
    </div>
  );
}
