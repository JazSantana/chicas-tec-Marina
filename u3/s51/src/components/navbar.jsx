function Navbar(){
    return (
        <nav className="bg-purple-500 text-white rounded-lg p-4">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-xl font-bold">logo</div>
                
                 <ul className="flex space-x-6">
                    <li className="hover:text-gray-300">Home</li>
                    <li className="hover:text-gray-300">Productos</li>
                    <li className="hover:text-gray-300">Sobre Nosotros</li>
                    <li className="hover:text-gray-300">Contactos</li>
                 </ul>
                <div className="flex space-x-6">
                    <button>
                        <i class="fa-regular fa-magnifying-glass"></i>
                    </button>
                    <button>Marcar</button>
                </div>
                
            </div>
        </nav>
    )
}
export default Navbar