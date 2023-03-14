import React, { useState } from 'react';

function TaskList() {
  const [tasks, setTasks] = useState([

  ]);

  function toggleTaskDone(id) {
    const newTasks = tasks.map((task) => {
      if (task.id === id) {
        return { ...task, isDone: !task.isDone };
      } else {
        return task;
      }
    });
    setTasks(newTasks);
  }

  return (
    <div>
      <ul className='list'>
        {tasks.map((task) => (
          <li key={task.id}>
            <input
              type="checkbox"
              checked={task.isDone}
              onChange={() => toggleTaskDone(task.id)}
            />
            <span>{task.description}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskList;