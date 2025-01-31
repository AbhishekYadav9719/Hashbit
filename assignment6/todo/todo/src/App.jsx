import React, { useState } from 'react';

function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const handleAddTask = () => {
    if (newTask !== '') {
      setTasks([...tasks, newTask].sort());
      setNewTask('');
    }
  };

  const handleDeleteTask = (task) => {
    setTasks(tasks.filter((t) => t !== task));
  };

  return (
    <div style={{ background: 'blue', textAlign: 'center', height: '1000px', margin: '20px', padding: '20px' }}>
      <h1 style={{ backgroundColor: 'aquamarine' }}>Todo List</h1>
      <br></br>
      <input
        style={{ fontSize: '30px', }}
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        placeholder="Enter the new task"
      />
      <button style={{ fontSize: '25px', color: 'red', marginLeft: '10px' }} onClick={handleAddTask}>Add task</button>
      <ul style={{ fontSize: '30px', color: 'orange', marginRight: '70vw', listStyle: 'square', textAlign: 'left', }}>
        {tasks.map((task, index) => (
          <li key={index}>
            {task}
            <button onClick={() => handleDeleteTask(task)} style={{ fontSize: '2vw', color: 'red', margin: '10px' }}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;

