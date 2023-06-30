import React, { useState } from 'react'

const Todo_list = () => {

const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  const addTask = () => {
    const trimmedTask = newTask.trim();
    if (trimmedTask !== '') {
      const task = {
        id: Date.now(),
        text: trimmedTask,
        completed: false,
      };

      setTasks((prevTasks) => [...prevTasks, task]);
      setNewTask('');
    }
  };

  const completeTask = (id) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  const filteredTasks = tasks.filter((task) =>
    task.text.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="task-manager">
      <h1 className='h1'>Todo List</h1>
      <div className="input-container">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Enter a task"
        />
        <button onClick={addTask}>Add a Task</button>
      </div>
      <ul className="task-list">
        {filteredTasks.map((task) => (
          <li
            key={task.id}
            className={task.completed ? 'completed' : ''}
          >
            {task.text}
            <div className="button-container">
              <button
                className="complete-button"
                onClick={() => completeTask(task.id)}
              >
                Complete
              </button>
              <button
                className="delete-button"
                onClick={() => deleteTask(task.id)}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Search tasks"
        className="search-input"
      />

      <style jsx>{`
        .task-manager {
          max-width: 400px;
          margin: 0 auto;
          padding: 20px;
        }
        .h1{
            font-weight:bold;
            font-size:20px;
            text-decoration:underline;
        }

        .input-container {
          display: flex;
          margin-bottom: 10px;
        }

        .input-container input {
          flex: 1;
          padding: 8px;
          font-size: 16px;
          border: 1px solid #ccc;
          border-radius: 4px;
          margin-right: 8px;
        }

        .task-list {
          list-style-type: none;
          padding: 0;
        }

        .task-list li {
          display: flex;
          align-items: center;
          margin-bottom: 8px;
        }

        .task-list li.completed {
          text-decoration: line-through;
          color: gray;
        }

        .button-container {
          margin-left: auto;
        }

        .complete-button,
        .delete-button {
          padding: 4px 8px;
          font-size: 14px;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          margin-left: 8px;
        }

        .complete-button {
          background-color: #5cb85c;
          color: white;
        }

        .delete-button {
          background-color: #d9534f;
          color: white;
        }

        .search-input {
          margin-top: 10px;
          padding: 8px;
          font-size: 16px;
          border: 1px solid #ccc;
          border-radius: 4px;
          width: 100%;
        }
      `}</style>
    </div>
  );
}

export default Todo_list
