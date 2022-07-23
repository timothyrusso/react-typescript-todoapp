import React, { FC, useState } from 'react';
import './App.css';

const App: FC = () => {
  // Defined the type of the App component, witch is a functional component

  const [task, setTask] = useState<string>(''); // Defined the type of this state, witch is a string
  const [deadline, setDeadline] = useState<number>(0); // Defined the type of this state, witch is a number
  const [todo, setTodoList] = useState([]);

  return (
    <div className="App">
      <div className="header">
        <div className="inputContainer">
          <input type="text" placeholder="Task..."></input>
          <input type="number" placeholder="Deadline (in Days)..."></input>
        </div>
        <button>Add Task</button>
      </div>
      <div className="todoList"></div>
    </div>
  );
};

export default App;
