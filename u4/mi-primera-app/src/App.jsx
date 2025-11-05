import { useState } from 'react'
import './App.css'
import app from './firebase'
import { getAuth, signOut } from 'firebase/auth'
import AddUser from './components/AddUser'; 
import UserList from './components/UserList';
import RegistrarUsuario from './components/RegistrarUsuario';
import Login from './components/Login';


function App() {
  console.log(app);

  const [usuario, setUsuario] = useState(null);
  const [mostrarLogin, setMostrarLogin] = useState(true)
  
  const cerrarSesion = async () => {
    const auth = getAuth();
    await signOut(auth);
    setUsuario(null);

  }
  const cambiarVista = () => {
    setMostrarLogin(!mostrarLogin);
  }
  return (
    <>
    {!usuario ? (
      mostrarLogin ? (
        <Login onLogin={setUsuario} cambiarVista={cambiarVista}/>
      ) : (
        <RegistrarUsuario  onRegister={setUsuario} cambiarVista={cambiarVista}/>
      ) 
    ) : (
    <>  
     <main className='bg-gradient-to-br from-purple-100 via-pink-100'>
     
     <div>
        <h1 className='text-4xl font-semibold text-purple-700 text-center pt-9 pb-0'>Mi pagina web con react y firebase</h1>
      </div>
     
     <AddUser>
     </AddUser> 
     <UserList/> 
     <button onClick={cerrarSesion}>Cerrar Sesion</button> </main>
     </>) }
     
    </>
  )
}

export default App
