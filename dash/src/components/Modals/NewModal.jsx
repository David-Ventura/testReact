
import React, { useEffect, useState } from "react";
import {Input} from 'reactstrap'
import useFetch from '../Hooks/useFetch';
import { useParams } from "react-router-dom";
import { getTaskRequest, getTaskRequestIo } from "../../api/newRegistro.api";
import API_CONFIG from "../../api/Config";

const enviarBd = API_CONFIG.endpoints.postData;

const {
    postFetch, getFetchId, getFetcho, getTaskId, getL, getTask,getTasssk
   } = useFetch();
//manipulado
export default function NewModal({data}) {
  const params = useParams();

/*
  const [editedData, setEditedData] = useState({
    title: 'title',
    title: 'title'
  });
*/

const [task, setTask] = useState({
  title: "",
  description: "",
});



 
/*
useEffect(()=>{
const load = async()=>{
    if(params.id){
    const id = params.id
    console.log(id)
 /*     const tas =  getTaskRequestIo(params.id);
      getTaskRequestIo(params.id)
   
    console.log('cargando')
   console.log(tas)
   */
 /* 
   getFetchId('taskss/',params.id)
   .then((respuesta)=>{
       console.log('respues->', respuesta)
   })
   .catch((error)=>{
       console.log('err',error)
   })
  }
};
load();


},[])
*/
  const [isButtonDisabled, setIsButtonDisabled] = useState(true); // Estado para controlar la habilitación del botón
    const [formData, setFormData] = useState({
        title: '',
        description: ''
      });
    
      const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
//funciona el envio
        postFetch(enviarBd,formData)
            .then((respuesta)=>{
                console.log('respues->', respuesta)
            })
            .catch((error)=>{
                console.log('err',error)
            })
      //fin del envio  
/*
        const url = "tasks/";
        const payload = {
            method: "POST",
            header: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(formData)
        }

        fetch(url, payload)
                .then((response) => respuesta.json())
                 .then((formData) => {
                   console.log("datos->", formData);
             })
             .catch((error) => {
           console.log("Error-->", error);
             });
*/
      //  postFetch("tasks/",)
     //   postFetch('tasks/', {
     //   postFetch('tasks/', formData);

   /*
        postFetch('tasks/', {
        //fetch('http://localhost:4000/tasks', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(formData)
        })
        .then(response => response.json())
        .then(data => {
          console.log('Respuesta del servidor:', data);
          // Aquí puedes manejar la respuesta del servidor según tus necesidades
        })
        .catch(error => {
          console.error('Error al enviar los datos:', error);
          // Aquí puedes manejar los errores de envío
        });
       */

        const checkFormCompletion = () => {
          const { username, email, password } = formData;
          setIsButtonDisabled(!(username && email && password)); // Deshabilita el botón si algún campo está vacío
        };
      };
    
      return (
        <div>
          <div>
            <h3>{params.id ? "Editar datos": "Nuevo Registro"}</h3>
          </div>

          <h1>Formulario de Registrou</h1>
          <form onSubmit={handleSubmit}>
            <div>
              <Input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                required
              />
              <Input
                type="text"
                name="description"
                value={formData.description}
                onChange={handleChange}
              />
              <label>Nombre de usuario:</label>
              <input
                type="text"
                name="username"
                value={formData.title}
                onChange={handleChange}
              />
            </div>
            <div>
              <label>Correo electrónico:</label>
              <input
                type="text"
                name="email"
                value={formData.descripcion}
                onChange={handleChange}
              />
            </div>

            <button type="submit" disabled={isButtonDisabled}>
              Registrarse
            </button>
          </form>
        </div>
      );
}
