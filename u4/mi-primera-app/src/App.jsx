import { useState } from 'react'
import app from './firebase'
import './App.css'
import AddUser from './components/AddUser'; 
import UserList from './components/UserList';

function App() {
  console.log(app);

  return (
    <>
     <main className='bg-gradient-to-br from-purple-100 via-pink-100'>
      <AddUser></AddUser> 
     <UserList/>
     </main>
     
    </>
  )
}

export default App
