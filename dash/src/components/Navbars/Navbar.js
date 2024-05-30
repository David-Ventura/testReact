import React from 'react'
import { Link } from 'react-router-dom';

 function Navbars() {
  return (
      <div>
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
          <li>
              <Link to="listTareas">Otro Modal</Link>
          </li>
      </ul>
     
    
    </div>

  );
}
export default Navbar