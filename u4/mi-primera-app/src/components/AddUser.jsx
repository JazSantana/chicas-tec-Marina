import { useState } from "react";
import{db} from "../firebase"
import{ collection, addDoc} from "firebase/firestore"

function AddUser() {
    const [Nombre, setNombre ] = useState("");
    const [Edad, setEdad ] = useState("");

    const AgregarUsuario = async () => {
        try {
      const docRef = await addDoc(collection(db, "users"), {
       first: "Ada",
       last: "Lovelace",
       born: 1815
     });
      console.log("Document written with ID: ", docRef.id);
     } catch (e) {
     console.error("Error adding document: ", e);
     }
    };

    return (
        <div>
            <h1>Formulario</h1>
            <label htmlFor="">Nombre</label>
            <input type="text" placeholder="Escribe tu nombre" value={Nombre}  onChange={(e) => setNombre(Edad.target.value)}/>
            <label htmlFor="">Edad</label>
            <input type="text" placeholder="Edad" value={Edad} onChange={(e) => setEdad(e.target.value)}  />
            <button onClick={AgregarUsuario}>Agregar usuario</button>
        </div>
    )
};

export default AddUser;