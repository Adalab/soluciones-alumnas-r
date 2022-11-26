import '../styles/App.scss';
import { useState } from 'react';

function App() {
  const [numberA, setNumberA] = useState(0);
  const [numberB, setNumberB] = useState(0);
  const [operation, setOperation] = useState('');

  const handleNumberA = (ev) => {
    setNumberA(ev.target.value);
  };

  const handleNumberB = (ev) => {
    setNumberB(ev.target.value);
  };

  const handleSelect = (ev) => {
    // operation = ev.target.value; si hago esto me obligará a cambiar el const a let en el estado y NO se debe hacer. Utilizamos la función de set para hacer cambios sobre el elemento
    setOperation(ev.target.value);
  };

  const renderTotal = () => {
    if (operation === 'Sumar') {
      return parseInt(numberA) + parseInt(numberB);
    } else if (operation === 'Restar') {
      return parseInt(numberA) - parseInt(numberB);
    } else if (operation === 'Multiplicar') {
      return parseInt(numberA) * parseInt(numberB);
    } else if (operation === 'Dividir') {
      if (numberB !== 0) {
        return parseInt(numberA) / parseInt(numberB);
      }
    }
  };

  return (
    <div>
      <h1>La calculadora:</h1>
      <select onChange={handleSelect}>
        <option>Sumar</option>
        <option>Restar</option>
        <option>Multiplicar</option>
        <option>Dividir</option>
      </select>
      <form>
        <label>
          Escribe un número:
          <input type='number' name='name' onChange={handleNumberA} />
        </label>
        <label>
          Escribe otro número:
          <input type='number' name='email' onChange={handleNumberB} />
        </label>
      </form>
      <p>
        El resultado de {operation} <strong>{numberA}</strong> y{' '}
        <strong>{numberB}</strong> es
        <strong>{renderTotal()}</strong>.
      </p>
    </div>
  );
}

export default App;
