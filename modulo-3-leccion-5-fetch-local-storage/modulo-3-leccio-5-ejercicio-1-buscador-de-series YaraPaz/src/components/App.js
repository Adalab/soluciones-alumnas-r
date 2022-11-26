import '../styles/App.scss';
import { useState } from 'react';
import callToApi from '../services/api';

function App() {
  //States
  const [search, setSearch] = useState('');
  const [series, setSeries] = useState([]);

  //Handlers
  const handleSubmit = (ev) => {
    ev.preventDefault();
  };

  const handleInput = (ev) => {
    const inputValue = ev.target.value;
    setSearch(inputValue);
  };

  const handleSearch = () => {
    callToApi(search).then((data) => {
      setSeries(data);
    });
  };

  //Render Helpers
  const renderSeries = () => {
    return series.map((eachSerie, i) => {
      return (
        <li key={i}>
          <p>{eachSerie.show.name}</p>
          <ul>
            {eachSerie.show.genres.map((eachGenre, i) => {
              return <li key={i}>{eachGenre}</li>;
            })}
          </ul>
          <p>{eachSerie.show.rating.average}</p>
        </li>
      );
    });
  };

  //Return
  return (
    <>
      <form action='' onSubmit={handleSubmit}>
        <label htmlFor=''></label>
        <input type='text' value={search} onChange={handleInput} />
        <button onClick={handleSearch}>Search</button>
      </form>
      <ul>{renderSeries()}</ul>
    </>
  );
}

export default App;
