import { useState } from 'react'
import app from './firebase'

import AddUser from './components/AddUser'; 


function App() {
  console.log(app);

  return (
    <>
    <div>
      <h1>Mi pagina web con React y Firebase</h1>
    </div>
     <AddUser></AddUser> 
    </>
  )
}

export default App
