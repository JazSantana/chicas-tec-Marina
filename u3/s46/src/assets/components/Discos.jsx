import { useEffect, useState } from "react";

function Discos() {
    const [discos, setDiscos] = useState ([]);
 useEffect(() => {
  fetch("/data/discos.json")
    .then((response) => response.json())
    .then((data) => {
        console.log("Datos obtenidos correctamente");
        console.log(data);
        setDiscos(data);
    })
    .catch((error) => console.log(`Eror al cargar datos ${error}`))
 },[]);
    return(
        <>
        <h1>Components Discos</h1>
        <div className="discos-container"></div>
        {discos.map((discos) => (
            <div className="discos-card" key={discos.id}>
                <h1>{discos.nameSong}</h1>
                <p>{discos.description}</p>
                <p>{discos.price}</p>
                <img src={discos.imgUrl} alt={discos.nameSong} />
            </div>
        ))}
        </>
    );
}
export default Discos;