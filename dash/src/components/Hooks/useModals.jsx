import React from 'react'
import { useState } from 'react';

const useModals = () => {

    const [showModal, setShowModal] = useState(false);

    const handleOpenModal = () => setShowModal(true);
    const handleCloseModal = () => setShowModal(false);

  return [showModal,handleOpenModal,handleCloseModal]

}
export default useModals;


