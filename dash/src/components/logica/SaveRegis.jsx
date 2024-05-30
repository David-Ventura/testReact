import React, { useState } from 'react';
import Modal from '../Modals/Modals';
import Button from 'react-bootstrap/Button';

const RegistroDatos = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [savedData, setSavedData] = useState([]);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const saveData = (data) => {
    setSavedData([...savedData, data]);
    closeModal(); // Cerrar modal después de guardar datos
  };

  return (
    <div>
      <h1>Datos Guardados:</h1>
      <ul>
        {savedData.map((data, index) => (
          <li key={index}>{data}</li>
        ))}
      </ul>
      <Button onClick={openModal}>Agregar Datos</Button>
      <Modal isOpen={isModalOpen} onClose={closeModal} onSave={saveData} />
    </div>
  );
};
export default RegistroDatos;