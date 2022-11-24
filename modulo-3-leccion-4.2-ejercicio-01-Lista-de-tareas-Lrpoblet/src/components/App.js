import { useState } from 'react';
import '../styles/App.css';

const App = () => {
  const [tasks, setTasks] = useState([
    { task: 'Comprar harina, jamón y pan rallado', completed: true },
    { task: 'Hacer croquetas ricas', completed: true },
    { task: 'Ir a la puerta de un gimnasio', completed: false },
    {
      task: 'Comerme las croquetas mirando a la gente que entra en el gimnasio',
      completed: false,
    },
  ]);

  const renderTasks = () => {
    return tasks.map((task, index) => {
      return (
        <ol key={index}>
          <li
            className={task.completed ? 'completed' : 'null'}
            id={index}
            onClick={handleClick}
          >
            {task.task}
          </li>
        </ol>
      );
    });
  };

  const handleClick = (ev) => {
    const clickedTaskId = ev.currentTarget.id;
    const foundTask = tasks[clickedTaskId];
    foundTask.completed = !foundTask.completed;
    setTasks([...tasks]);
  };

  return (
    <div>
      <h1>Mi lista de tareas</h1>
      {renderTasks()}
    </div>
  );
};

export default App;
