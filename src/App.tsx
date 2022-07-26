import React, { FC, ChangeEvent, useState } from 'react';
import './App.css';
import TodoTask from './Components/TodoTask';
import { ITask } from './Interfaces';

const App: FC = () => {
  // Defined the type of the App component, which is a functional component

  const [task, setTask] = useState<string>(''); // Defined the type of this state, which is a string
  const [deadline, setDeadline] = useState<number>(0); // Defined the type of this state, which is a number
  const [todoList, setTodoList] = useState<ITask[]>([]); // This state will be an ITask interfaces and also an array

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    // Defined the input and the output type of the function. If a function does not return any value then you can specify void as return type
    if (event.target.name === 'task') {
      setTask(event.target.value);
    } else {
      setDeadline(Number(event.target.value)); // Defined the type of the setState input, which is number. If we don't set here the type, the function will return an error
    }
  };

  const addTask = (): void => {
    // Create an object that follow the ITask interface type guidelines, necessary for the todoList state
    const newTask = { taskName: task, deadline: deadline };
    // Add a task in the todoList to the old tasks
    setTodoList([...todoList, newTask]);
    console.log(todoList);
  };

  const completeTask = (taskNameToDelete: string): void => {
    setTodoList(
      todoList.filter((task) => {
        return task.taskName !== taskNameToDelete;
      })
    );
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
            value={task}
          ></input>
          <input
            type="number"
            placeholder="Deadline (in Days)..."
            onChange={handleChange}
            name="deadline"
            value={deadline}
          ></input>
        </div>
        <button onClick={addTask}>Add Task</button>
      </div>
      <div className="todoList">
        {todoList.map((task: ITask, key: number) => {
          return <TodoTask key={key} task={task} completeTask={completeTask} />;
        })}
      </div>
    </div>
  );
};

export default App;
