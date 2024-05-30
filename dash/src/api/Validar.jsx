import React, { useState, useEffect }  from 'react'
import useFetch from '../components/Hooks/useFetch';


   
    
    const Validar = () => {
      const [serverStatus, setServerStatus] = useState('unknown');

      useEffect(() => {
        const fetchServerStatus = async () => {
          try {
            const response = await fetch('http://localhost:4000/server.status');
         //  const response = await validarserver('server.status/');
            if (response.ok) {
              const data = await response.json();
              // Establece el estado del servidor en base a los datos recibidos
              setServerStatus(data.status); 
            } else {
              // Si la solicitud no es exitosa, el servidor podría no estarse ejecutando
              setServerStatus('unavailable');
            }
          } catch (error) {
            // Si hay un error al realizar la solicitud, el servidor podría no estarse ejecutando
            setServerStatus('unavailable');
            console.error('Error al obtener el estado del servidor:', error);
          }
        };
    // Llama a la función para obtener el estado del servidor cuando el componente se monta
        fetchServerStatus(); 
      }, []); // Este efecto se ejecuta solo una vez al montar el componente
    
      return (
        <div>
          {serverStatus === 'unknown' && <p>Verificando el estado del servidor...</p>}
          {serverStatus === 'available' && <p>El servidor está en online.</p>}
          {serverStatus === 'unavailable' && <p>El servidor no se está ejecutando.</p>}
        </div>
      );
    };
    
    export default Validar;