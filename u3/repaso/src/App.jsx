
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from './components/footer'
import Header from './components/header'
import Section from './components/section'
import './index.css'

function App() {
  return (
    <>
    <BrowserRouter>
    <Header></Header>
    

    <Routes>

      <Route
      path='/'
      element={
        <>
        </>
      }
      />
    </Routes> 




    <Section></Section>
    <Footer></Footer>
    </BrowserRouter>
    </>
  )
}

export default App
