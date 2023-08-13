
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from '../NavBar/CartWidget/CartWidget'
import {NavLink} from "react-router-dom"; 

function NavBar() {
  return (
    <div class="position-relative">
      <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand to="/">Pro Security</Navbar.Brand>
          <Nav className="me-auto  "> 
            <div class="position-absolute top-50 start-50 translate-middle d-flex  ">
            
            <NavLink className=" text-decoration-none text-white px-3" to="/">Home</NavLink>
            <NavLink className=" text-decoration-none text-white px-3" to="/category/Camaras">Camaras</NavLink>
            <NavLink className=" text-decoration-none text-white px-3" to="/category/Alarmas">Alarmas</NavLink>
            <NavLink className=" text-decoration-none text-white px-3" to="/category/Cerraduras">Cerraduras</NavLink>
            <NavLink className=" text-decoration-none text-white px-3" to="/checkout">Formulario</NavLink>
            

            </div>

            <div class="position-absolute  top-0 end-0 p-3" >
            <NavLink  to="/cart"><CartWidget/></NavLink>
            </div>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavBar;