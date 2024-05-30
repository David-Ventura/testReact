import React, { useState } from 'react';
import ModalComponent  from './Modals';
import useModals from '../Hooks/useModals';

const testModal = () => {
 
const [showModal,handleOpenModal,handleCloseModal] = useModals();


  return (
    <div className="App">
      <h1>React Bootstrap Modal Example con React Mysql</h1>
      <button onClick={handleOpenModal}>Open Modal</button>
      <ModalComponent show={showModal} handleClose={handleCloseModal} />
    </div>
  );
};

export default testModal;