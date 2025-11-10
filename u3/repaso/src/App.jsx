import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/footer.jsx";
import Header from "./components/header.jsx";
import Login from "./components/Login.jsx";
import RegistrarUsuario from "./components/RegistrarUsuario.jsx";
import Caracteristicas from "./pages/caracteristicas.jsx";
import Inicio from "./pages/inicio.jsx";

import "./index.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path="/inicio" element={<Inicio />} />
          <Route path="/caracteristicas" element={<Caracteristicas />} />
          <Route path="/registrar" element={<RegistrarUsuario />} />
          <Route path="/Login" element={<Login />} />
        </Routes>

      
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
