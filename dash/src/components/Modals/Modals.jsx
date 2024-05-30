import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import {
  Container, Row, Col, Form, Input,  Navbar, Nav,
  NavbarBrand, NavLink, NavItem, UncontrolledDropdown,
  DropdownToggle, DropdownMenu, DropdownItem
} from 'reactstrap';

const ModalComponent = ({ show, handleClose,onClose  }) => {
  
  
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Modal Title</Modal.Title>
        <Input type="text" name="name" value={''} onChange={''} />
      </Modal.Header>
      <Modal.Body>
        
        <p>Modal Content</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        {/* Agrega aquí tu lógica para enviar datos a la API si es necesario */}
        <Button variant="primary" onClick={handleClose}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
};



export default ModalComponent;