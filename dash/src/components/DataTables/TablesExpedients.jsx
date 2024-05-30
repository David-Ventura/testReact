import React, { useEffect, useState  } from 'react'
import Table from "react-bootstrap/Table";
import DataTable from 'react-data-table-component'

import { getTaskRequest } from '../../api/newRegistro.api';

export default function TablesExpedients({task}) {
  const [data, setTasks] = useState([])

  const columnss = [
    {
      name : 'id',
      selector: row=>row.task.id
    }
   ]
  return (



    <Table striped bordered hover>
{/*

 <div>
          <DataTable
             data={task}
           columns={[{
            title: 'ID', task: 'id'
           }] }
   
       />
    </div>

  */}
   

      <>
      
      </>
     
        <thead>
    <tr>
        <th>#</th>
        <th>Title</th>
        <th>Description</th>
        <th>Valor</th>
      </tr>
    </thead>
    <tbody>

  
  <tr>
        <td>{task.id}</td>
        <td>{task.title}</td>
        <td>{task.description}</td>
        <td>{task.done}</td>
      </tr>


    
      
    </tbody>
      

  
  </Table>
   
  );
  
 /*
  <div>
      <h2>{task.id}</h2>
    <h2>{task.title}</h2>
    <h2>{task.description}</h2>
    <span>{task.done == 1 ? "✅" : "-"}</span>
    <button onClick={()=> handleDelete(task.id)}>Delete</button>
    <button>Edit</button>
    
  </div>
  
  )
  */
}
