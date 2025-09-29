import "./MyComponent.css"
//Primero definimos la funcion y dar el nombre en PascalCase
function MyComponent({name, age, favoriteFood, favoriteColor}) {
    //OPCIONALMENTE agregamos logica 
   // const name  = "Marina";
    //const age = 15 ;
    //const food = "Lasagna";
    //return con JSX 
    return (
        <>
         <h3 className="greet">Hola me llamo {name}, tengo {age} años, mi color favorito es {favoriteColor} y mi comida favorita es {favoriteFood} </h3>
         <p className="text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus, magni? Quo reprehenderit saepe aperiam enim consequatur reiciendis ipsum, officia magnam aspernatur culpa neque, ea vero odio. Velit sint doloremque maiores?</p>
        </>
    )  
}
//Exportar el componente para que se pueda utilizar en otros archivos
export default MyComponent
