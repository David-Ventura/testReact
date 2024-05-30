import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'


import { Route,Routes } from 'react-router-dom'
import {BrowserRouter} from 'react-router-dom';

import ListaTareas from './components/pages/ListTareas.jsx'
import NewTarea from './components/pages/NewTarea.jsx'
import NotFound from './components/pages/NotFound.jsx';
import Home from './components/pages/home.jsx';

import NewModal from './components/Modals/NewModal.jsx';
import OtroModal from './components/Modals/NewModal.jsx';

import Nav from './components/Navbars/Nav'

import { Container, Row, Col } from "reactstrap";
import Post from './assets/layaouts/Post.jsx';
import Header from "./assets/layaouts/header";
import SideCard from "./assets/layaouts/SideCard";

import Heder from './assets/layaouts/testHeader.jsx'
import Footer from './assets/layaouts/footer.jsx'
import  './assets/css/header.css'
import ModalComponent from './components/Modals/Modals.jsx';
import OtroModals from './components/pages/OtroModals.jsx';
import Validar from './api/Validar.jsx';




function App() {
  const [count, setCount] = useState(0)



  return (
    <>
  <Validar />
    
    <Heder />

  <div className="Aplicacion">
          <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/NewTarea" element={ <NewTarea /> } />
        <Route path="/ListTareas" element={ <ListaTareas /> } />
        {/*configurando la edicion*/}
        <Route path="/edit/:id" element={ <OtroModals /> } />
      {/*<Route path="/OtroModal" element={ <OtroModal /> } /> */ }  
        <Route path="*" element={ <NotFound /> } />
      </Routes>
    </div>
    <body>
      <main>
   
        </main>

    </body>
    <Footer />
  {/*
 
   

      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
  */  }
  
    </>
  )
}

export default App
