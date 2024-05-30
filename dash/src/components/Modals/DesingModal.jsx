import React, { useEffect, useState } from "react";
import useModalTest from "../Hooks/useModalTest";
import { Modal, Button } from "react-bootstrap";
import axios from "axios";
import {
  Container,
  Row,
  Col,
  Form,
  Input,
  Navbar,
  Nav,
  NavbarBrand,
  NavLink,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import useFetch from "../Hooks/useFetch";

const {
   postFetch 
  } = useFetch();



const DesingModal = ({ show, handleClose }) => {
  
  const [formData, setFormData] = useState({
    title: "",
    description: "",

    // Otros campos que desees guardar
  });
//probando otro envio 
/*
useEffect(()=>{
  async function enviar(){
postFetch("tasks/", formData)
      .then((response) => {
        console.log("respuesta->", response);

      })
      .catch((error) => {
        console.log("error", error);
      });

  }
    enviar()

},[])
*/
// enviando datos
  function enviarDatos() {
    postFetch('tasks/',formData)
    .then((respuesta)=>{
        console.log('respues->', respuesta)
    })
    .catch((error)=>{
        console.log('err',error)
    })
    
  }

  const [formErrors, setFormErrors] = useState({
    title: "",
    descripcion: "",
  });
  const validateField = (fieldName, value) => {
    let error = "";
    switch (fieldName) {
      case "title":
        error =
          value.length > 1
            ? "El nombre de usuario debe tener al menos 3 caracteres"
            : "";
        break;
      case "descripcion":
        // Validación de correo electrónico simple, no exhaustiva
        // error = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ? '' : 'Correo electrónico inválido';
        error =
          value.length > 1
            ? "El nombre de usuario debe tener al menos 3 caracteres"
            : "";
        break;

      default:
        break;
    }
    setFormErrors({ ...formErrors, [fieldName]: error });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [e.target.name]: e.target.value });
    // Puedes agregar validación en tiempo real si lo deseas
    validateField(name, value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (validateForm()) {
       //  const response = await axios.post('http://localhost:4000/tasks', formData);
        enviarDatos();
      } else {
        console.log("El formulario contiene errores.");
      }

  //    console.log(response.data); // Maneja la respuesta de la API según sea necesario
      handleClose();
    } catch (error) {
      console.error("Hubo un Error al enviar el formulario:", error);
    }
  };

  const isFormValid = () => {
    for (let field in formErrors) {
      if (formErrors[field] !== "") {
        return false;
      }
    }
    return true;
  };
  const validateForm = () => {
    let isValid = true;
    for (let field in formData) {
      if (formData[field] === "") {
        setFormErrors({ ...formErrors, [field]: "Este campo es obligatorio" });
        isValid = false;
      }
    }
    return isValid;
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Captura de datos</Modal.Title>
      </Modal.Header>
      <Form onSubmit={handleSubmit}>
        <Modal.Body>
          <p>Registro nuevos Expedientes</p>
          <label>
            Nombre:
            <span className="error">{formErrors.title}</span>
            <Input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Apellidos:
            <Input
              type="text"
              name="description"
              value={formData.descripcion}
              onChange={handleChange}
            />
          </label>
          <label>
            Carrera:
            <Input
              type="text"
              name="carrera"
              value={""}
              onChange={"handleChange"}
            />
          </label>

          <button type="submit" disabled={!isFormValid()}>
            Guardar
          </button>
          {" "}
          <button type="submit" disabled={!isFormValid()}>
            Enviar
          </button>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          {/* Agrega aquí tu lógica para enviar datos a la API si es necesario */}
          <Button variant="primary" onClick={handleClose}>
            {" "}
            Save Changes
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
};
export default DesingModal;

//configurando post
/*
const payload = {
  method: "POST",
  header: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(datos),
};

fetch(url, payload)
  .then((response) => respuesta.json())
  .then((datos) => {
    console.log("datos->", datos);
  })
  .catch((error) => {
    console.log("Error-->", error);
  });
*/