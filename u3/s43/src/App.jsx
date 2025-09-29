import './App.css'
import MyComponent from './components/MyComponent';

function App() {

  return (
    <>
    <MyComponent  name = "Rosita" age = {18} favoriteColor = "Azul" favoriteFood = "arroz con pollo" />
    <MyComponent name = "Adriana" age = {17} favoriteColor = "Morado" favoriteFood = "Chicharron" />
      <h1>Vite + React</h1>
    </>
  )
}

export default App;
