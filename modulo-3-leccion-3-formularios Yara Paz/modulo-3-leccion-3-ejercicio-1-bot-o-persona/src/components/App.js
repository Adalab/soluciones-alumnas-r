import '../styles/App.scss';
import { useState } from 'react';

function App() {
  const [ingredients, setIngredients] = useState({
    macarrones: true,
    patatas: false,
    nueces: false,
    huevos: false,
    cebolla: false,
    cerveza: false,
  });

  const handleChange = (ev) => {
    const checkboxName = ev.target.name;
    const checkboxValue = ev.target.checked;
    setIngredients({ ...ingredients, [checkboxName]: checkboxValue });
  };

  const renderMessage = () => {
    if (ingredients.patatas && ingredients.huevos && ingredients.cebolla) {
      return 'Eres una persona concebollista';
    } else {
      return 'Eres un robot sin paladar';
    }
  };

  const handleAll = () => {
    ingredients.macarrones === true;
    ingredients.patatas === true;
    ingredients.nueces === true;
    ingredients.huevos === true;
    ingredients.cebolla === true;
    ingredients.cerveza === true;
  };

  const handleReset = () => {
    ingredients.macarrones === false;
    ingredients.patatas === false;
    ingredients.nueces === false;
    ingredients.huevos === false;
    ingredients.cebolla === false;
    ingredients.cerveza === false;
  };

  return (
    <div className='App'>
      <h1>Selecciona los ingredientes de la tortilla de patatas</h1>
      <form action=''>
        <label htmlFor=''>Macarrones</label>
        <input
          type='checkbox'
          name='macarrones'
          id=''
          value={ingredients.macarrones}
          onChange={handleChange}
        />
        <label htmlFor=''>Patatas</label>
        <input
          type='checkbox'
          name='patatas'
          id=''
          value={ingredients.patatas}
          onChange={handleChange}
        />
        <label htmlFor=''>Nueces</label>
        <input
          type='checkbox'
          name='nueces'
          id=''
          value={ingredients.nueces}
          onChange={handleChange}
        />
        <label htmlFor=''>Huevos</label>
        <input
          type='checkbox'
          name='huevos'
          id=''
          value={ingredients.huevos}
          onChange={handleChange}
        />
        <label htmlFor=''>Cebolla</label>
        <input
          type='checkbox'
          name='cebolla'
          id=''
          value={ingredients.cebolla}
          onChange={handleChange}
        />
        <label htmlFor=''>Cerveza</label>
        <input
          type='checkbox'
          name='cerveza'
          id=''
          value={ingredients.cerveza}
          onChange={handleChange}
        />
      </form>
      <button onChange={handleAll}>Marcar todos</button>
      <button onChange={handleReset}>Desmarcar todos</button>
      <p>{renderMessage()}</p>
    </div>
  );
}

export default App;
