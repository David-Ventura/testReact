import axios from 'axios'
import API_CONFIG from './Config';

//listando datos del backend
export const getTaskRequest = async ()=>
     await axios.get('http://localhost:4000/tasks')

export const deleteTaskRequest= async (id)=>
await axios.delete(`http://localhost:4000/tasks/${id}`);

//enviando datos al backend
export const getTaskRequestIo = async(id)=>{
     await axios.get(`http://localhost:4000/taskss/${id}`);
}
export const getTaskRequestId = async ()=>
  await axios.get('http://localhost:4000/tasks')

export const fetchData = async () => {
     try {
       const response = await fetch(API_CONFIG.baseURL + API_CONFIG.endpoints.getData);
       // Resto del código para manejar la respuesta
     } catch (error) {
       console.error('Error al obtener los datos:', error);
     }
   };

const url='http://localhost:4000/tasks'

   const getFetch =(url)=>{
   //  const url = `${urlBase}/${urlParcial}`
   //const url='http://localhost:4000/tasks'
     
     return new Promise((resolve, reject)=>{
     fetch(url)
     .then((response)=>response.json())
     .then((datos)=>{
     resolve(datos)
     
     })
     .catch((error)=>{
     reject(error)
     })
     })
     }
     

//export default newRegistro.api