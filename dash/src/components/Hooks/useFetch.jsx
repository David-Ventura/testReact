import React from 'react'

import API_CONFIG from '../../api/Config';
import { getTaskRequest, getTaskRequestIo } from "../../api/newRegistro.api";


  const urlBase = API_CONFIG.baseURL;
 function useFetch() {


  // const urlBase = "http://localhost:4000";

  const getFetch = (urlParcial) => {
    const url = `${urlBase}/${urlParcial}`;
    return new Promise((resolve, reject) => {
        fetch(url)
            .then((response) => {
                if (!response.ok) {
                    throw new Error('La solicitud GET no fue exitosa');
                }
                return response.json();
            })
            .then((datos) => {
                resolve(datos);
            })
            .catch((error) => {
                reject(error);
                console.error('Error al obtener los datos:', error);
            });
    });
};
/*
   return {
     getFetch
   };
*/

   const postFetch=(urlParcial, datos)=>{
    const url = `${urlBase}/${urlParcial}`;
    return new Promise((resolve, reject) => {
      const payload={
        method: 'POST',
        headers:{
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(datos)
      }
      fetch(url,payload)
        .then((response) => response.json())
        .then((datos) => {
          console.log('datos',datos)
          resolve(datos);
          console.log('datos-->', datos)
       /*   if (!response.ok) {
           throw new Error('Error al obtener los datos');
         }
         */
        })
        .catch((error) => {
          reject(error);
         console.error('Error al obtener los datos:', error);
        });
    });

   };
   /*
   return {
    postFetch
   };
*/
//get x id para actualizar
const getFetchId = (urlParcial,datos) => {
  const url = `${urlBase}/${urlParcial}`;
  return new Promise((resolve, reject) => {
    const payload={
      method: 'get',
      headers:{
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(datos)
    }
    fetch(url, payload)
      .then((response) => response.json())
      .then((datos) => {
        console.log('datos',datos)
        resolve(datos);
        console.log('datos-->', datos)
     /*   if (!response.ok) {
         throw new Error('Error al obtener los datos');
       }
       */
      })
      .catch((error) => {
        reject(error);
       console.error('Error al obtener los datos:', error);
      });
  });
};
///fin
 
const getTaskId = async (urlParcial, taskId) => {
  const url = `${urlBase}/${urlParcial}`;

  try {
    const response = await fetch(url,taskId);
  
    if (!response.ok) {
      throw new Error('Error al obtener los datos');
    }
    const data = await response.json();
    console.log(data)
    return data;
  } catch (error) {
    console.error('Error al obtener los datos:', error);
    throw error;
  }
};


//enviando datos para actualizar en bd por id
const getTaskUpdate = async (urlParcial, taskId, datos) => {
  try {
      const url = `${urlBase}/${urlParcial}`;

      return new Promise((resolve, reject) => {
          const payload = {
              method: 'PUT',
              headers: {
                  'Content-Type': 'application/json'
              },
              body: JSON.stringify(datos)
          };

          fetch(url, payload)
              .then((response) => response.json())
              .then((datos) => {
                  console.log('datos', datos);
                  resolve(datos);
              })
              .catch((error) => {
                  reject(error);
                  console.error('Error al actualizar los datos:', error);
              });
      });
  } catch (error) {
      console.error('Error en la función getTaskUpdate:', error);
      throw error;
  }
};
//

//enviando un delete por id
const deleteTask = async (urlParcial, id) => {
  try {
      const url = `${urlBase}/${urlParcial}`;

      return new Promise((resolve, reject) => {
          const payload = {
              method: 'DELETE',
              headers: {
                  'Content-Type': 'application/json'
              }
          };

          fetch(url, payload)
            //  .then((response) => response.json())
            .then((response)=>{
              if(!response.ok){
                throw new Error('No pudo ser elimnado el archivo');
              }
              return response.json
            })
              .then((datos) => {
                if(datos){
                    console.log('datos', datos);
                    resolve(datos);
                }else{
                  throw new Error('La respuesta del servidor esta vacía');
                }
                 
                  
              })
              .catch((error) => {
                  reject(error);
                  console.error('Error al eliminar los datos:', error);
              });
      });
  } catch (error) {
      console.error('Error en la función deleteTask:', error);
      throw error;
  }
};
//fin


/*
const getFetch = (urlParcial) => {
  const url = `${urlBase}/${urlParcial}`;
  return new Promise((resolve, reject) => {
    fetch(url)
      .then((response) => response.json())
      .then((datos) => {
        resolve(datos);
        if (!response.ok) {
         throw new Error('Error al obtener los datos');
       }
      })
      
      .catch((error) => {
        reject(error);
       console.error('Error al obtener los datos:', error);
      });
  });
};
*/

const getTask =  (id) => {
  try {
    const response =  getTaskRequest(id);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
const getL = (id) => {
  console.log('pasando ', id)
  let o = 6;
//  const url = `${urlBase}/${urlParcial}`;
  return new Promise((resolve, reject) => {
    const url = `https://localhost/4000/taskss?id=${id}`;
    useFetch(url)
      .then((response) => response.json())
      .then((datos) => {
        resolve(datos);
     /*   if (!response.ok) {
         throw new Error('Error al obtener los datos');
       }
        */  
      })
   
      .catch((error) => {
        reject(error);
       console.error('Error al obtener los datos:', error);
      });
  });
};

const getTasssk = async (id) => {
  try {
    const response = await getTaskRequestIo(id);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
/*
const validarserver = (urlParcial) => {
  const url = `${urlBase}/${urlParcial}`;

  
  return new Promise((resolve, reject) => {
      fetch(url)
          .then((response) => {
              if (!response.ok) {
                  throw new Error('La solicitud GET no fue exitosa');
              }
              return response.json();
          })
          .then((datos) => {
              resolve(datos);
          })
          .catch((error) => {
              reject(error);
              console.error('Error al ejecutar consulta:', error);
          });
  });
};
*/
//probando otra


//

return{ getFetch, postFetch, getFetchId, getTaskId, getL, getTask,getTasssk,getTaskUpdate,deleteTask}
 }
export default useFetch;
