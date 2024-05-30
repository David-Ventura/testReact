import React, { useState } from 'react';
import axios from 'axios';



const useModalTest = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
  descripcion: '',
    // Otros campos que necesites para tu registro
  });

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

 


return [isOpen,openModal,closeModal]
 
}

export default useModalTest;