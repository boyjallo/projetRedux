import React, { useState } from 'react';

function Tache() {
  const [tasks, setTasks] = useState([
    { id: 1, description: 'Faire les courses', isDone: false },
    { id: 2, description: 'Faire le ménage', isDone: true },
    { id: 3, description: 'Appeler le médecin', isDone: false },
  ]);
  const [newTaskDescription, setNewTaskDescription] = useState('');
  const [filter, setFilter] = useState('all');

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

  function addNewTask() {
    const newTask = {
      id: tasks.length + 1,
      description: newTaskDescription,
      isDone: false,
    };
    setTasks([...tasks, newTask]);
    setNewTaskDescription('');
  }

  function updateTaskDescription(id, newDescription) {
    const newTasks = tasks.map((task) => {
      if (task.id === id) {
        return { ...task, description: newDescription };
      } else {
        return task;
      }
    });
    setTasks(newTasks);
  }

  function deleteTask(id) {
    const newTasks = tasks.filter((task) => task.id !== id);
    setTasks(newTasks);
  }

  let filteredTasks;
  if (filter === 'done') {
    filteredTasks = tasks.filter((task) => task.isDone);
  } else if (filter === 'not-done') {
    filteredTasks = tasks.filter((task) => !task.isDone);
  } else {
    filteredTasks = tasks;
  }

  return (
    <div>
      <h2 className='titre'>Liste des tâches</h2>
      <div>
        <input
          type="text"
          value={newTaskDescription}
          onChange={(e) => setNewTaskDescription(e.target.value)}
        />
        <button onClick={addNewTask}>Ajouter</button>
      </div>
      <div>
        <label htmlFor="filter">Filtrer par :</label>
        <select
          id="filter"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="all">Tous</option>
          <option value="done">Terminé</option>
          <option value="not-done">Non terminé</option>
        </select>
      </div>
      <ul className='list'>
        {filteredTasks.map((task) => (
          <li key={task.id}>
            <input
              type="checkbox"
              checked={task.isDone}
              onChange={() => toggleTaskDone(task.id)}
            />
            <input
              type="text"
              value={task.description}
              onChange={(e) => updateTaskDescription(task.id, e.target.value)}
            />
            <button onClick={() => deleteTask(task.id)}>Supprimer</button>
          </li>
        ))}
        {tasks
          .filter((task) => !filteredTasks.includes(task
            ))
            .map((task) => (
            <li key={task.id}>
            <input
            type="checkbox"
            checked={task.isDone}
            onChange={() => toggleTaskDone(task.id)}
            />
            <input
            type="text"
            value={task.description}
            onChange={(e) => updateTaskDescription(task.id, e.target.value)}
            />
            <button onClick={() => deleteTask(task.id)}>Supprimer</button>
            </li>
            ))}
            </ul>
            </div>
            );
            }
            
            export default Tache;
