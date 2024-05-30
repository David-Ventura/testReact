import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { IoMdPersonAdd } from "react-icons/io";

/*
function Heder () {
    return(
        <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Mi Aplicación</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Inicio</Nav.Link>
            <Nav.Link href="#link1">Opción 1</Nav.Link>
            <Nav.Link href="#link2">Opción 2</Nav.Link>
            <Nav.Link href="#link3">Opción 3</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#link4">Opción de Usuario</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    );
}
*/

    function Heder() {
 
      
        return (

            /*
    
          <Navbar fixed='top' expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap SSE</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="newTarea">Nuevos Registros</Nav.Link>
            <Nav.Link href="listTareas">Lis Registros</Nav.Link>
            <NavDropdown title="Expedientes" id="basic-nav-dropdown">
              <NavDropdown.Item href="listTareas">Listar Tareas</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    */
    /*<Navbar fixed='top' collapseOnSelect expand="lg" className="bg-body-tertiary" style={{backgroundColor: 'rgba(1, 15, 77)'}}>*/
    <Navbar fixed='top' collapseOnSelect expand="lg" className="" id='header'>
      <Container>
        <Navbar.Brand href="/" className='text-warning'>React-Bootstrap SSE</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="newTarea"><IoMdPersonAdd /> Nuevos Registros </Nav.Link>
            <Nav.Link href="ListTareas">Listar</Nav.Link>
            <Nav.Link href="OtroModals">OtroModal</Nav.Link>
            <NavDropdown title="Dropdown" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">More deets</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Dank memes
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        );
      }
      
      export default Heder;