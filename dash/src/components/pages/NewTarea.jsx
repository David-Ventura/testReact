import React from 'react'

import TestModals from '../Modals/tesModalsN.jsx';
import NewModal from '../Modals/NewModal.jsx';
import OtroModal from '../Modals/OtroModal.jsx';

export default function NewTarea() {
  return (
    <div className='container'>
      <h3>Nuevos Registros</h3>

     
    <TestModals />

    <NewModal />


    <OtroModal />
    </div>

  )
}
