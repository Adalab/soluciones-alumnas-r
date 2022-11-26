import '../styles/App.scss';
import { useState } from 'react';
import ls from '../services/local-storage';

function App() {
  //States
  const [tasks, setTasks] = useState(
    ls.get('tasks', [
      { task: 'Comprar harina, jamón y pan rallado', completed: true },
      { task: 'Hacer croquetas ricas', completed: true },
      { task: 'Ir a la puerta de un gimnasio', completed: false },
      {
        task: 'Comerme las croquetas mirando a la gente que entra en el gimnasio',
        completed: false,
      },
    ])
  );
  const [searchName, setSearchName] = useState('');
  const [completedTask, setCompletedTask] = useState(2);
  const [toDoTask, setToDoTask] = useState(2);
  const [newTask, setNewTask] = useState({ task: '', completed: false });

  //Handlers
  const handleClick = (ev) => {
    const taskId = ev.currentTarget.id; //Reconozco sobre que elemento he hecho click con su id, que coincide en este caso justo con su posicion en el array porque le he pedido que su id o key sea igual a su posicion porque los elementos no tenian un id ya asignado
    const selectedTask = tasks[taskId]; //Meto en esta variable el elemento que encuentre dentro del array de tasks en esta posicion
    selectedTask.completed = !selectedTask.completed; //Cambio su valor completed
    setTasks([...tasks]); //Actualizo los datos en el array inicial
    updateCounters(); //actualiza contadores recorriendo el nuevo array actualizado
    ls.set('tasks', tasks);
  };

  const handleInput = (ev) => {
    setSearchName(ev.target.value);
  };

  const handleNewTask = (ev) => {
    setNewTask({ ...tasks, [ev.target.name]: ev.target.value });
  };

  const handleAdd = () => {
    setTasks([...tasks, newTask]);
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
  };

  const handleEliminate = (ev) => {
    ev.stopPropagation(); //asi evito que le afecte el evento de su madre
    tasks.splice(ev.target.id, 1); //actualizo el array eliminando el objeto sobre el que he hecho click
    setTasks([...tasks]); //SIEMPRE debo actualizar el array generico una vez llevado a cabo el cambio
  };

  const updateCounters = () => {
    let complete = 0;
    let todo = 0;
    tasks.forEach((eachTask) => {
      if (eachTask.completed === true) {
        complete++;
      } else {
        todo++;
      }
    });
    setCompletedTask(complete);
    setToDoTask(todo);
  };

  //Renders
  const renderTasks = () => {
    return tasks
      .filter((eachTask) => {
        if (eachTask.task.includes(searchName)) {
          return eachTask;
        }
        return eachTask;
      })
      .map((eachTask, i) => {
        if (eachTask.completed === true) {
          return (
            <li key={i} className='crossed' id={i} onClick={handleClick}>
              {eachTask.task}
              <button id={i} onClick={handleEliminate}>
                Eliminate task
              </button>
            </li>
          );
        } else {
          return (
            <li key={i} id={i} onClick={handleClick}>
              {eachTask.task}
              <button id={i} onClick={handleEliminate}>
                Eliminate task
              </button>
            </li>
          );
        }
      });
  };

  //Return
  return (
    <>
      <h1>Mi lista de tareas</h1>
      <ol>{renderTasks()}</ol>
      <form action='' onSubmit={handleSubmit}>
        <label htmlFor=''>Search </label>
        <input type='text' value={searchName} onChange={handleInput} />
        <label htmlFor=''> Insert new Task </label>
        <input
          type='text'
          name='task'
          value={newTask.name}
          onChange={handleNewTask}
        />
        <button onClick={handleAdd}>Add new task</button>
      </form>
      <p>Tareas totales: {tasks.length}</p>
      <p>Tareas completadas: {completedTask}</p>
      <p>Tareas pendientes: {toDoTask}</p>
    </>
  );
}

export default App;
