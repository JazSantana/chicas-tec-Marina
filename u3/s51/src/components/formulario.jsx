function Formulario (){
    return (
        <div className="max-w-md bg-white p-6 rounded-lg shadow-md mx-auto my-6">
           <form className="space-y-4">
            <div>
                <label className="block text-sm font-medium mb-1" htmlFor="name">Nombre</label>
                <input className= " w-full border border-gray-300 rounded px-3 py-2" type="text" name="name" id=""/>
            </div>
            <div>
                <label className="block text-sm font-medium mb-1" htmlFor="email">Correo Electronico</label>
                <input className= " w-full border border-gray-300 rounded px-3 py-2" type="email" />
            </div>
            <div>
                <label className="block text-sm font-medium mb-1" htmlFor="escribe">Mensaje</label>
                <textarea className= "w-full border border-gray-300 rounded px-3 py-2" name="mensaje" id=""></textarea>
            </div>
            <button className="bg-purple-500 border text-white w-full py-2 rounded">Enviar</button>
           </form>
        </div>
    )
}
export default Formulario