import { useEffect, useState } from 'react'
import './App.css'
import Pokemon from "./assets/components/Pokemon";

function App() {
  const [count, setCount] = useState(0);
  const [num, setNum] = useState(0); 
  const [message, setMessage] = useState("");
 useEffect (() => {
  console.log("Este numero es ");
  console.log(`${count}`);
 }, [num]);
  return (
    <>
    <Pokemon />
     <h3>{num}</h3>
     <input type="text" onChange={(e) => 
      setNum(e.target.value)} />

      <div className='card'>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
       </div> 
    </>
  )
}

export default App;



//Mostrar un mensaje que indique si es par o es impar, 
//mensaje: este numero es par 
//mensaje2 : este numero es impar
//los numeros impares son todos los que terminan en 1,3,5,7,9
//los numeros pares son todos lo que terminan en  0,2,4,6,8,
//que salga un mensaje si el tipo de numero que se ingresa termin