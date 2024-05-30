// DataTable.js

import React, { useState } from 'react';
import { Table, Form } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { deleteTaskRequest, getTaskRequestIo } from '../../api/newRegistro.api';
import { Link, useNavigate } from "react-router-dom";
import useFetch from '../Hooks/useFetch';
import Swal from 'sweetalert2'; // Importa SweetAlert




const {
  deleteTask
 } = useFetch();

const DataTable = ({ data}) => {

  const navigate = useNavigate();

  const [firstName,setFirstName] = useState('');
  const [searchTerm, setSearchTerm] = useState('');


  //filtrando datos en caja de texto
  const filteredData = data.filter(row =>
    Object.values(row).some(
      value =>
        typeof value === 'string' && value.toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

//eliminando por id

const handleDelete = async (id) => {

  try {
      // Mostrar una alerta de confirmación
      const result = await Swal.fire({
          title: '¿Estás seguro?',
          text: '¡No podrás revertir esto!',
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Sí, eliminarlo'
      });

      // Si el usuario confirma la eliminación
      if (result.isConfirmed) {
          // Llama a la función deleteTask para eliminar la tarea
          await deleteTask(`tasks/${id}`);
          // Muestra una alerta de éxito
          Swal.fire(
              '¡Eliminado!',
              'La tarea ha sido eliminada.',
              'success'
          );
      }
      window.location.reload();
  } catch (error) {
      console.error(error);
  }
};



  //mostrando datos
  const edit = ()=>{
    try{
      const response =  getTaskRequestIo(id)
      firstName
      console.log(response)
    }catch (error){
      console.error(error)
    } 
  }


  return (
    <div>
      <Form>
        <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
        <Form.Label column sm="3">
         <strong>
            Filtre por Nombre Estudiante
            </strong> 
        </Form.Label>
        <Col sm="4">
        <Form.Control controlId="formBasicSearch"
            type="text"
            placeholder="Buscar por nombre"
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
          />
        </Col>
        </Form.Group>
       
      </Form>
       <br />
      <Table striped bordered hover className='tabla' >
       
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Descip</th>
            <th style={{ width: '20%' }}>Acciones</th>
           
          </tr>
        </thead>
        <tbody>
          {filteredData.map(row => (
            <tr key={row.id}>
              <td>{row.id}</td>
              <td>{row.title}</td>
              <td>{row.description}</td>
              <td className='text-center'>
              {/*<button className='btn btn-warning'    onClick={() => navigate(`/edit/${row.id}`)}> */} 
              {/*
                <button className='btn btn-warning'    onClick={() => navigate(`/edit/${row.id}`)}> 
                  <FaEdit size={26} />  
                </button>
              */}
            
                      {' '}
                <button className='btn btn-danger' onClick={()=> handleDelete(row.id)}>
                <MdDelete size={26} />
                </button>
                {' '}
                <button className='btn btn-warning'    onClick={() => navigate(`/edit/${row.id}`)}> 
                  <FaEdit size={26} />   otro boton
                </button>

           
             
                </td>
         
            </tr>
          ))}
        </tbody>
      </Table>
      
    </div>
  );
};

export default DataTable;
