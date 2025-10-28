import { useState } from "react";
import{db} from "../firebase"
import{ collection, addDoc} from "firebase/firestore"
import './AddUser.css'

function AddUser() {
    const [Nombre, setNombre ] = useState("");
    const [Descripcion, setDescripcion ] = useState("");

    const AgregarTareas = async () => {
        try {
      const docRef = await addDoc(collection(db, "tareas"), {
       nombre: Nombre,
       descripcion: Descripcion,
       fecha: new Date ()
     });
      console.log("Document written with ID: ", docRef.id);
     } catch (e) {
     console.error("Error adding document: ", e);
     }
    };

    return (
       <div className="min-h-screen flex items-center justify-center   to-white p-6">
      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md border border-purple-200">
        <h1 className="text-2xl font-semibold text-purple-700 text-center mb-6">
          Tareas Pendientes
        </h1>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Nombre
          </label>
          <input
            type="text"
            placeholder="Nombre de la materia"
            value={Nombre}
            onChange={(e) => setNombre(e.target.value)}
            className="w-full p-3 border border-purple-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:outline-none"
          />
        </div>

        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Descripción
          </label>
          <textarea
            placeholder="Describe la tarea pendiente"
            value={Descripcion}
            onChange={(e) => setDescripcion(e.target.value)}
            className="w-full p-3 border border-purple-300 rounded-xl h-28 resize-none focus:ring-2 focus:ring-purple-500 focus:outline-none"
          />
        </div>

        <button
          onClick={AgregarTareas}
          className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 rounded-xl shadow-md transition duration-200"
        >
          Agregar tarea
        </button>
      </div>
    </div>
    )
};

export default AddUser;