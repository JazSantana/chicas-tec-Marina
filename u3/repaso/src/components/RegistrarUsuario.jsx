import { useState } from "react"
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

function RegistrarUsuario({OnRegister, cambiarVista}){
 const [email,setEmail] = useState ("");
 const [password, setPassword] = useState ("");

 const registrar = async() => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    console.log("Cuenta creada con exito");
    OnRegister(user)
    
    
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log("Error al registrar el usuario");
    console.log(error)
    
  });
 }

    return (
       <div className="min-h-screen flex items-center justify-center   to-white "> 
       <div className="bg-white shadow-xl rounded-2xl p-6 w-full max-w-md border border-purple-200 space-y-3 mt-0" >
        <h1  className="text-2xl font-semibold text-purple-700 text-center mb-6">Registrar Usuario</h1>
        <input className = "w-full p-2 border border-purple-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:outline-none" type="email" placeholder="Escribe tu Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input className = "w-full p-2 border border-purple-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:outline-none" type="password" placeholder="Escribe tu contraseña" value={password} onChange={(e) => setPassword(e.target.value)}/>
        <button className="w-full mt-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 rounded-xl shadow-md transition duration-200" onClick = {registrar}>Registrar</button>
       <button onClick={cambiarVista}>Iniciar sesion</button>
       </div>
       </div>
    )
}
export default RegistrarUsuario