import React from 'react';
import { Table } from 'react-bootstrap';

const Editar = () => {
	return (
		<div className="editar">
			<h1>A Que persona deseas Editar?</h1>
			<Table striped bordered hover>
				<thead>
					<tr>
						<th>#</th>
						<th>Nombre</th>
						<th>Apellido</th>
						<th>Email</th>
						<th>Telefono</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>1</td>
						<td>Mark</td>
						<td>Otto</td>
						<td>@mdo</td>
					</tr>
					<tr>
						<td>2</td>
						<td>Jacob</td>
						<td>Thornton</td>
						<td>@fat</td>
					</tr>
					<tr>
						<td>3</td>
						<td>Larry the Bird</td>
						<td>@twitter</td>
					</tr>
				</tbody>
			</Table>
		</div>
	);
};

export default Editar;
