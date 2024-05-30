import React from 'react'
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <div>
      <h1>Esta es la página de inicio Mysql React</h1>
      <ul>
        <li>
             <Link to="/">Inicio</Link>
        </li>
        <li>
              <Link to="NewTarea">Nueva Tarea</Link>
        </li>
        <li>
              <Link to="listTareas">Listar Tarea</Link>
        </li>
       
      </ul>
     
    
    </div>

      

  )
}

