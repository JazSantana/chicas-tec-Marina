import { useState } from "react"
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth"

function Login() {
 const [email,setEmail] = useState ("");
 const [password, setPassword] = useState ("");

 const iniciarSesion = async() => {const auth = getAuth();
signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log("Se inicio sesion")
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log("Error al inciar sesion")
  });

 }

    return (
        <div className="min-h-screen flex items-center justify-center   to-white p-6">
        <div className="bg-white shadow-xl rounded-2xl p-6 w-full max-w-md border border-purple-200 space-y-3">
            <h1 className="text-2xl font-semibold text-purple-700 text-center mb-6" >Iniciar Sesion</h1>
            <label className="block text-sm font-medium text-gray-700 mb-1">Correo Electronico</label>
            <input className="w-full p-2 border border-purple-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:outline-none" type="email"  placeholder="Escribe tu Email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <label className="block text-sm font-medium text-gray-700 mb-1">Contraseña</label>
            <input className = "w-full p-2 border border-purple-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:outline-none" type="password" placeholder="Escribe tu contraseña" value={password} onChange={(e) => setPassword(e.target.value)}/>
            <button className="w-full mt-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 rounded-xl shadow-md transition duration-200" onClick={iniciarSesion} >Iniciar sesion</button>
        </div>
        </div>
    )
}
export default Login