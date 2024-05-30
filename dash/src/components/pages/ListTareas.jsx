import React, { useEffect, useState  } from "react";
import Table from "react-bootstrap/Table";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "font-awesome/css/font-awesome.min.css";

import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import BotonsNew from "../Botons/BotonsNew";
import MyModal from "../Modals/Modals"; 
import RegistroDatos from "../logica/SaveRegis";
import Modals from "../Modals/Modals";
import CustomModal  from "../Modals/testModal";
import Desing from "../Modals/DesingModal";
import useModalTest from "../Hooks/useModalTest";
import TestModals from "../Modals/tesModalsN";
import testModal from "../Modals/testModal";
import {getTaskRequest} from "../../api/newRegistro.api";
import TablesExpedients from "../DataTables/TablesExpedients";
import DataTable from "react-data-table-component";
import Tabla from "../DataTables/testExpedientes";


import getFetch from '../Hooks/useFetch'
import useFetch from "../Hooks/useFetch";
 
//listando datos
function ListaTareas() {
  const fontStyles = { color: "blue", fontSize: "30px" };
  const [tasks, setTasks] = useState([]);

  const {
      getFetch
  } = useFetch()


  useEffect(()=>{
    async function loadTask(){
  //    const response = await getTaskRequest()
   //   const response = await getFetch()
   //   
    //  const {datos} = datos
 //     setTasks(data)
   
//    console.log(response.data)
//setTasks(response.data)
   
 
 
 getFetch('tasks/')
      .then((datos) => {
          console.log('datos-->',datos)
          const  data = datos
          setTasks(data)       
      })
      .catch((error)=>{
        console.log('Error-->', error)
      })     
    }
    loadTask()
   
  }, [])

  function renderMain(){
    if(tasks.length == 0)
    return <div className="container justify-content-center">
      <h3>No hay datos registrados</h3>
      </div>
    /*
    return tasks.map(task => 
          <TablesExpedients task={task} key={task.id}/>
      
      )  
      */
      return <Tabla />
  }
  return (
    <div>   
      {renderMain()}
    </div>
     )
    }
/*    <div className="container justify-content-center">
      <h2>Lista de registros</h2>
      <CustomModal  />
      <div>
      <h3>Mi Aplicación</h3>
      <TestModals />

    </div>
      <br />

      <br />
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>First Name </th>
            <th>Last Name</th>
            <th>Username</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>
              {" "}
              Edit <FaEdit style={fontStyles} />{" "}
            </td>
            <td>
              <MdDelete />
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
            <td>
              <FaEdit />
            </td>
            <td>
              <MdDelete />
            </td>
          </tr>
          <tr>
            <td>3</td>
            <td colSpan={2}>Larry the Bird</td>
            <td>@twitter</td>
            <td>
              <FaEdit />
            </td>
            <td>
              <MdDelete />
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
*/  
 

export default ListaTareas;
