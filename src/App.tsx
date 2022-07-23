import React, { FC, ChangeEvent, useState } from 'react';
import './App.css';

const App: FC = () => {
  // Defined the type of the App component, which is a functional component

  const [task, setTask] = useState<string>(''); // Defined the type of this state, which is a string
  const [deadline, setDeadline] = useState<number>(0); // Defined the type of this state, which is a number
  const [todo, setTodoList] = useState([]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    // Defined the input and the output type of the function. If a function does not return any value then you can specify void as return type
    if (event.target.name === 'task') {
      setTask(event.target.value);
    } else {
      setDeadline(Number(event.target.value)); // Defined the type of the setState input, which is number. If we don't set here the type, the function will return an error
    }
  };

  return (
    <div className="App">
      <div className="header">
        <div className="inputContainer">
          <input
            type="text"
            placeholder="Task..."
            onChange={handleChange}
            name="task"
          ></input>
          <input
            type="number"
            placeholder="Deadline (in Days)..."
            onChange={handleChange}
            name="deadline"
          ></input>
        </div>
        <button>Add Task</button>
      </div>
      <div className="todoList"></div>
    </div>
  );
};

export default App;
