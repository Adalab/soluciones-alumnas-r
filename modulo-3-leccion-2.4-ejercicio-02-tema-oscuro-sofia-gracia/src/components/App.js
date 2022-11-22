import '../styles/App.scss';
import { useState } from 'react';

function App() {
  const [darkTheme, setDarktheme] = useState(false);
  const [ContainerClass, SetContainerClass] = useState('light')
  console.log(darkTheme)

  const handleToggleDark = () => {
    setDarktheme(!darkTheme);
    console.log(darkTheme);
    if (!darkTheme) {
      SetContainerClass('dark');
    } else {
      SetContainerClass('light');
    }
  };

  const renderDarkModeText = () => {
    if (darkTheme) {
      return (
        <p>Tienes activado el modo oscuro</p>
      )
    } else {
      return (<p></p>)
    }
  }

  return (
    <div className={`App ${ContainerClass}`}>
      <h1>madre mía</h1>
      <button onClick={handleToggleDark}>Des/activar el modo oscuro</button>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor cum,
        velit sequi totam ullam magnam, vitae alias incidunt maiores iure itaque
        earum tenetur eius nulla id quo asperiores sapiente. Lorem ipsum dolor
        sit amet consectetur adipisicing elit. Dolorem tempore impedit error
        pariatur hic laudantium quas esse amet ducimus distinctio architecto
        ipsam recusandae et ipsum, nobis earum eaque. Accusantium, asperiores.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum non
        exercitationem aliquam recusandae quasi iure totam ratione quisquam nemo
        quos incidunt itaque dolorem cum, quam cupiditate ipsa minima at.
        Sapiente?
      </p>
      {renderDarkModeText()}
    </div>
  );
}

export default App;

