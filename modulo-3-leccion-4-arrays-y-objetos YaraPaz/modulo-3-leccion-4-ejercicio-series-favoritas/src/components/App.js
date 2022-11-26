// Fichero src/components/App.js
import { useState } from 'react';

//Me reconoce las series como favoritas pero no me hace el si y el no bien

const App = () => {
  // Estados

  const [series, setSeries] = useState([
    { id: '123', name: 'Juego de tronos' },
    { id: '456', name: 'Las chicas Gilmore' },
    { id: '678', name: 'Gambita de Dama' },
  ]);
  const [searchName, setSearchName] = useState('');
  const [searchIsFavorite, setSearchIsFavorite] = useState(false);
  const [favorites, setFavorites] = useState([]);

  // Eventos

  const handleFavorite = (ev) => {
    const clickedSerieId = ev.currentTarget.id;
    const foundSerie = series.find((serie) => serie.id === clickedSerieId);
    const foundSerieIndex = favorites.findIndex(
      (serie) => serie.id === clickedSerieId
    );

    if (foundSerieIndex === -1) {
      favorites.push(foundSerie);
    } else {
      favorites.splice(foundSerieIndex, 1);
    }
    setFavorites([...favorites]);
    setSeries([...series]);
  };

  const handleSearchName = (ev) => {
    setSearchName(ev.target.value);
  };

  const handleSearchIsFavorite = (ev) => {
    setSearchIsFavorite(ev.target.checked); //cambia el tru o false dependiendo del valor true o false de su propiedad checked (comoe el value pero en radios o checkboxes)
  };

  // const arrayRemove = (array, value) => {
  //   debugger;
  //   const filtered = array.filter((ele) => ele !== value);
  //   console.log(filtered);
  //   return filtered;
  // }; //funcion eliminadora de elementos del array (lo que hace es recorrerme el array y buscarme que los elementos por los que pase no sean iguales al value que le ha pasado y me los irá metiendo dentro de este nuevo array filtrado). Al final me devuelve el array filtrado sin el elemento que queria eliminar.

  // Funciones de renderizado

  const renderfavorite = (el) => {
    //Usar un FIND antes que un FOREACH es mas acertado porque recorre el array de favoritos y solo saca el si o el no una vez ha recorrido todo el array y me suelta las conclusiones. No va con cada elemento
    if (favorites.length !== 0) {
      const result = favorites.find((eachFav) => eachFav.id === el.id);
      //Poner o undefined o null, dependiendo de lo que devuelva
      if (result !== undefined) {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  };
  //Que hacemos en esta funcion anterior?? Muy sencillo. Le pido haga varias cosas:
  //1. Verificamos si el array de favoritos esta lleno o no. Si esta vacio retorno false directamente. Si está lleno paso al paso 2.
  //2. Recorro la lista de favoritos lanzando un find diciendome: "oye, si el id del objeto que te he pasado como parametro coincide con el id del objeto del array de favoritos por el que estas pasando metemelo dentro de la constante result".
  //3. Si result esta lleno, entonces me devuelves true. Si esta vacio me devuelves false
  //¿Por que necesito true o false? Porque to este booleano lo uso (muy utilizado en react) para despues en el ternario de la seccion en la que está este renderFavorite le digo: "si la respuesta es true, me pintas esto, pero si es false, me pintas esto". FIN DE LA CUESTION

  const renderSeries = () => {
    return (
      series
        // Filtramos por nombre
        .filter((serie) => {
          return serie.name.toLowerCase().includes(searchName.toLowerCase());
        })
        // Mapeamos
        .filter((serie) => {
          if (searchIsFavorite) {
            const found = favorites.find(
              (eachSerie) => eachSerie.id === serie.id
            );
            return found;
            // - Para comparar dos arrays y encontrar que elementos son semejantes puedo:
            //1. Recorrer con un filter el array 1. Dentro de su array nuevo creado con el filtro meteré el resultado de este filtro
            //2. Recorro el otro array con un find que me buscará que elemento del array 2 coincide exactamente con el elemento por el que estoy pasando del array 1. Como solo tiene que ser uno, nos vale. Para comparar elementos se debe hacer SIEMPRE CON UNA PROPIEDAD DEL OBJETO, y NUNCA con el objeto en si mismo porque sino no funciona
            //3. Una vez encontrado el elemento lo meto en el array nuevo creado con el filter con un return, siempre debemos retornar algo.
          } else {
            return true; //si le digo que me devuelva TRUE quiere decir que todo es verdadero asi que literalmente me devuelve todo el array que tengo sin filtrarmelo.
          }
        })
        .map((serie) => {
          //Hacemos el cambio de objetos a elementos html
          console.log(serie);
          return (
            //El si o el no aparecerán dependiendo de: si la pelicula está en favoritos o no
            <li key={serie.id} id={serie.id} onClick={handleFavorite}>
              <h2>{serie.name}</h2>
              <p>Es mi serie favorita: {renderfavorite(serie) ? 'Sí' : 'No'}</p>
            </li>
            //me devolvia solo un SI o solo un NO porque el array de inFAV solo tenia un elemento al machacarse en cada vuelta de la iteracion. Esto ocurre cuando hacemos un filter dentro de otro filter.
          );
        })
    );
  };

  return (
    <div>
      <h1>Lista de series:</h1>

      <ul>{renderSeries()}</ul>

      <form>
        <label htmlFor='searchName'>Buscar por nombre de serie</label>
        <input
          type='text'
          id='searchName'
          value={searchName}
          onChange={handleSearchName}
        />
        <label htmlFor='searchIsFavorite'>Mostrar solo las favoritas</label>
        <input
          type='checkbox'
          id='searchIsFavorite'
          checked={searchIsFavorite}
          onChange={handleSearchIsFavorite}
        />
      </form>
    </div>
  );
};

export default App;
