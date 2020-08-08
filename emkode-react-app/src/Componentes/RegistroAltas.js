import React from 'react';
import { Form, Button } from 'react-bootstrap';
const agregarcontenido = () => {};
const Registro = () => {
	return (
		<div className="Registro">
			<h1>Agregar Personal</h1>
			<Form.Label valor>Nombre</Form.Label>
			<Form.Control size="sm" type="text" placeholder="Nombre" />
			<Form.Label>Apellido</Form.Label>
			<Form.Control size="sm" type="text" placeholder="Apellido" />
			<Form.Label>Email</Form.Label>
			<Form.Control type="email" placeholder="Enter email" />
			<Form.Label>Telefono</Form.Label>
			<Form.Control size="sm" type="text" placeholder="Nombre" className="Inputs" />
			<Button id="btnagregar" variant="primary" size="lg" block>
				Agregar a la lista
			</Button>
		</div>
	);
};

export default Registro;
