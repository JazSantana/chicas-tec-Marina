import { useState } from 'react'


import './components/AddUser'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <AddUser></AddUser> 
    </>
  )
}

export default App
