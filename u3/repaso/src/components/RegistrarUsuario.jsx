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

    return  (
  <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-100 via-rose-100 to-white p-6">
    <div className="bg-white/70 backdrop-blur-sm shadow-xl rounded-2xl p-8 w-full max-w-md border border-pink-200 space-y-4 mt-0">
      <h1 className="text-3xl font-bold text-pink-600 text-center mb-6">
        Registrar Usuario
      </h1>

      <input
        className="w-full p-3 border border-pink-300 rounded-xl focus:ring-2 focus:ring-pink-400 focus:outline-none"
        type="email"
        placeholder="Escribe tu Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        className="w-full p-3 border border-pink-300 rounded-xl focus:ring-2 focus:ring-pink-400 focus:outline-none"
        type="password"
        placeholder="Escribe tu contraseña"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button
        className="w-full mt-4 bg-pink-500 hover:bg-pink-600 text-white font-semibold py-3 rounded-xl shadow-md transition duration-200"
        onClick={registrar}
      >
        Registrar
      </button>

      <div className="text-center mt-4">
        <p className="text-gray-600 text-sm">¿Ya tienes una cuenta?</p>
        <button
          className="text-pink-500 hover:underline font-semibold mt-1"
          onClick={cambiarVista}
        >
          Iniciar sesión
        </button>
      </div>
    </div>
  </div>
    )
}
export default RegistrarUsuario