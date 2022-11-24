import '../styles/App.css';

const App = () => {
  const tasks = [
    { task: 'Comprar harina, jamón y pan rallado', completed: true },
    { task: 'Hacer croquetas ricas', completed: true },
    { task: 'Ir a la puerta de un gimnasio', completed: false },
    {
      task: 'Comerme las croquetas mirando a la gente que entra en el gimnasio',
      completed: false,
    },
  ];

  const renderTasks = () => {
    return tasks.map((task, index) => {
      return (
        <li
          className={task.completed === true ? 'completed' : 'none'}
          key={index}
        >
          {task.task}
        </li>
      );
    });
  };

  return (
    <div>
      <h1>Mi lista de tareas</h1>
      <ol>{renderTasks()}</ol>
    </div>
  );
};

export default App;
