import React, { useState, useEffect } from 'react';
import Tabla from '../pages/PruebaLista'
import {getTaskRequest} from "../../api/newRegistro.api";


const App = () => {
  const [data, setTasks] = useState([]);

  useEffect(()=>{
    async function loadTask(){
      const response = await getTaskRequest()
   
    console.log(response.data)
    setTasks(response.data)
    }
    loadTask()
   
  }, [])

  return (
    <div className="container justify-content-center">
        <div className="alert alert-primary text-center" role="alert">
                 <h3>Datos de Table Mysql</h3>
        </div>
      
      <br />
        <br />
      <Tabla data={data} />
    </div>
  );
};

export default App;