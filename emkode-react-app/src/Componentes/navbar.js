import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import Registro from './RegistroAltas';

const todos = (props) => {
	return (
		<div>
			<Navbar bg="light" expand="lg">
				<Navbar.Brand href="#home">Empresa X</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="mr-auto">
						<Nav.Link onClick={props.agregar} href="#">
							Agregar
						</Nav.Link>
						<Nav.Link onClick={props.editar} href="#link">
							Editar
						</Nav.Link>
						<Nav.Link href="#link">Borrar</Nav.Link>
						<Nav.Link href="#link">Listar</Nav.Link>
						<Nav.Link href="#link">Consultar</Nav.Link>
					</Nav>
				</Navbar.Collapse>
				<Nav>
					<Nav.Link href="#deets">More deets</Nav.Link>
					<Nav.Link eventKey={2} href="#memes">
						Dank memes
					</Nav.Link>
				</Nav>
			</Navbar>
		</div>
	);
};

export default todos;
