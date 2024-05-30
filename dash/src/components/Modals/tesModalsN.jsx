import React, { useState } from 'react';
import ModalComponent  from './Modals';
import useModals from '../Hooks/useModals';
import useModalTest from '../Hooks/useModalTest';
import DesingModal from './DesingModal';

const TestModals = () => {
 
    const [isOpen,openModal,closeModal] = useModalTest();


  return (
    <div className="App">
      <h3>Modal Api Rest con Mysql React</h3>
      <button onClick={openModal}>Open Modal sqsqwsws</button>
      <DesingModal show={isOpen} handleClose={closeModal} />
    </div>
  );
};

export default TestModals;