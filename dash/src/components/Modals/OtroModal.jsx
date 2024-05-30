
import React, { useEffect, useState } from "react";
import {Input} from 'reactstrap'
import useFetch from '../Hooks/useFetch';
import { useParams } from "react-router-dom";
import { getTaskRequest, getTaskRequestIo } from "../../api/newRegistro.api";
import axios from "axios";
import Swal from 'sweetalert2'; // Importa SweetAlert

const {
  postFetch, getFetchId, getFetcho, getTaskId, getL, getTask,getTasssk,getTaskUpdate
 } = useFetch();

const EditUserForm = ({ userId }) => {
  const [userData, setUserData] = useState({
    title: '',
    description: '',
    // Otros campos del usuario que desees editar
  });
}

const UserEditForm = ({ userId }) => {
  const [user, setUser] = useState(null);
  const params = useParams();
  console.log(params.id)
  const {id} = useParams;
  let ids = useParams;
  const [value,setValues, title] = useState({
    title:''
  })



  const [task, setTask] = useState({
    title: "",
    description: "",
  });

//



//probando
//const UserEditForm = ({ userId }) => {
  
/*
  useEffect(() => {
    // Función para cargar los datos del usuario cuando el componente se monta o el ID del usuario cambia
    const fetchUserData = async () => {
      try {
        // Haciendo la solicitud GET para obtener los datos del usuario por su ID
        console.log('daddada', params.id)
        const response =  getTaskId(`taskss/${params.id}`);
      //  setValues({...values,title:response.data[0]})
   

        console.log(response);

        setTask({
          title: task.title,
          description: task.description,
        });
  
        // Actualizando el estado del usuario con los datos obtenidos
        //setUser(response.data);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    // Llamando a la función para cargar los datos del usuario
    fetchUserData();
  }, []);
*/


//chat 
const [formData, setFormData] = useState({
  title: "",
  description: "",
});

useEffect(() => {
  const fetchUserData = async () => {
    try {
      // Fetching data

      const response = await getTaskId(`taskss/${params.id}`);
      console.log(response);

      const { title, description } = response;
      setFormData({ title, description });

      // Setting state with fetched data
      setTask({
        title: response.title,
        description: response.description,
      });
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  // Calling fetchUserData whenever params.id changes
  fetchUserData();
}, [params.id]);

const handleChange = (e) => {
  setFormData({ ...formData, [e.target.name]: e.target.value });
};


//fin




//actualizando datos a la bd con fetch

const updateHandle = (event) => {
  const taskId = params.id; 
  event.preventDefault();
  
  // Mostrar una alerta de confirmación
  Swal.fire({
      title: '¿Estás seguro?',
      text: '¿Quieres actualizar la tarea?',
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, actualizar'
  }).then((result) => {
      if (result.isConfirmed) {
          // Si el usuario confirma la actualización, llama a la función getTaskUpdate
          getTaskUpdate(`tasks/${taskId}`, taskId, formData)
          .then(response => {
              // Actualización exitosa, puedes mostrar una alerta de éxito si lo deseas
              Swal.fire(
                  '¡Actualizado!',
                  'La tarea ha sido actualizada.',
                  'success'
              );
          })
          .catch((error) => {
              console.log('Error actualizando', error);
              // Si ocurre un error durante la actualización, puedes mostrar una alerta de error si lo deseas
              Swal.fire(
                  'Error',
                  'Hubo un error al actualizar la tarea.',
                  'error'
              );
          });
      }
   //   window.location.reload();
  });
};
//



  // Manejador para actualizar los datos del usuario


  const handleInputChange = (event) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Manejador para enviar el formulario
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      // Haciendo la solicitud PUT para actualizar los datos del usuario
      await axios.put(`https://api.example.com/users/${userId}`, formData);
      alert('Usuario actualizado correctamente!');
    } catch (error) {
      console.error('Error updating user:', error);
      alert('Hubo un error al actualizar el usuario. Por favor, inténtalo de nuevo.');
    }
  };


//

      return (
        <div>
          <h1 className="text-xl font-bold uppercase text-center">
            {params.id ? "Edit Datos" : "New Datos"}
          </h1>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
          />
          <h1>{""}</h1>

          <form onSubmit={updateHandle}>
            <div>
              <label htmlFor="name">Title:</label>
              <input
                type="text"
                id="title"
                name="title"
                value={formData.title}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="Description">Description:</label>
              <input
                type="text"
                id="description"
                name="description"
                value={formData.description}
                onChange={handleChange}
              />
            </div>
            {/* Otros campos del formulario si es necesario */}
            <button type="submit">Guardar cambios</button>
          </form>
        </div>
      );
  };
export default UserEditForm
