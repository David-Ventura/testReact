import React, { useState, useEffect } from 'react';
import Tabla from '../pages/PruebaLista'
import {getTaskRequest} from "../../api/newRegistro.api";
import useFetch from '../Hooks/useFetch';
import API_CONFIG from '../../api/Config';

const {
 otroGet
 } = useFetch();

 const cargarBd = API_CONFIG.endpoints.getData;



const App = () => {
  const [data, setTasks] = useState([]);

  useEffect(()=>{
    async function loadTask(){
      //listando datos del server
      /*
    const response = await getTaskRequest()
    console.log(response.data)
    setTasks(response.data)
    */
    try {
      // Fetching data

      //const response = await otroGet('tasks/');
   
        otroGet(cargarBd)
        .then((data)=>{
          console.log('datos---',data)
          //const {data}=datos
          setTasks(data)

        })
  
      // Setting state with fetched data
 //     setTask({
  //      title: response.title,
 //       description: response.description,
 //     });
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
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