//import './App.css';
import React from 'react';
import { AppUI } from './AppUI';
import {TodoProvider} from '../TodoContext';

/*const defaultTodos = [
  {text: 'Cortar cebolla',  completed: true},
  {text: 'Tomar el curso de intro a React',  completed: false},
  {text: 'Llorar con la llorona',  completed: false},
];*/



function App() {

  //console.log("Render antes del useEffect");

  // Ejecuta el código una vez haya renderizado
  //React.useLayoutEffect
  // Al enviarle el array vació se ejecuta solamente una vez []
  // Cuando haya un cambio en el estado [totalTodos]
  /*React.useEffect(() => {
    console.log("UseEffect");
  }, [totalTodos]);

  console.log("Render despúes del useEffect");*/

  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  );
}

export default App;
