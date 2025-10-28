import { useState, useEffect } from "react";
import { db } from "../firebase";
import { collection, onSnapshot } from "firebase/firestore";
import '../index.css'

function UserList(){
    const[tarea, setTareas] = useState([]);
    useEffect (() => {
      const ObtenerTareas = onSnapshot(collection(db, "tareas"),(snapshot) => {
        const lista = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data()
        }))
        setTareas(lista)
      })
        return () => ObtenerTareas();
     }, []);
      return(
        <div className="min-h-screen flex items-center justify-center  to-white p-6">
          <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md border border-purple-200">
            <h2 className="text-2xl font-semibold text-purple-700 text-center mb-6">Lista de Tareas</h2>
            <ul className="list-disc marker:text-sky-400">
                {tarea.map((tarea) => (
                    <li key={tarea.id}>
                        <p>{tarea.nombre} - {tarea.descripcion}</p>
                    </li>
                ))}
            </ul>
            </div>
        </div>
      )
    }

    export default UserList