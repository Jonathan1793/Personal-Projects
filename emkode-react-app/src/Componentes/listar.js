import React, { Component } from 'react';
import data from '../db.json';
import { Table, Form, FormControl, Button } from 'react-bootstrap';

let datos = data.employees;

// for (let i = 0; i < datos.length; i++) {
// 	for (let j = 0; j < datos.length[i]; j++) {
// 		console.log(datos[i][j]);
// 	}
// }

// const searchforsome = (event) => {
// 	filter(event.target.value);

// };
function searchfor(term) {
	return (x) => {
		return (
			x.name.toLowerCase().includes(term.toLowerCase()) ||
			x.last_name.toLowerCase().includes(term.toLowerCase()) ||
			x.email.toLowerCase().includes(term.toLowerCase()) ||
			x.phone.toLowerCase().includes(term)
			// x.last_name.toLowerCase().includes(term.toLowerCase() || !term)
		);
	};
}

class Lista extends Component {
	constructor(props) {
		super(props);
		this.state = {
			datos: datos,
			term: ''
		};
	}
	searchHandler = (event) => {
		this.setState({
			term: event.target.value
		});
	};
	triggerdelete = (id) => {
		//JESUS FUCKING CHRIST MAN, WORK!
		let datos = [ ...this.state.datos ];
		let datoborrar = datos.findIndex((item) => item.id === id);

		datos.splice(datoborrar, 1);
		this.setState({
			datos
		});
		console.log('fin', datos);
	};

	render() {
		const { term, datos } = this.state;
		return (
			<div>
				<Form className="search" inline>
					<FormControl
						onChange={this.searchHandler}
						value={this.state.term}
						type="text"
						placeholder="Search"
						className="mr-lg-2"
					/>
				</Form>
				<Table>
					<tbody>
						<tr>
							<th>ID</th>
							<th>Nombre</th>
							<th>Apellido</th>
							<th>Email</th>
							<th>Telefono</th>
						</tr>

						{datos.filter(searchfor(term)).map((item, key) => {
							return (
								<tr key={key}>
									<td>{item.id}</td>
									<td>{item.name}</td>
									<td>{item.last_name}</td>
									<td>{item.email}</td>
									<td>{item.phone}</td>
									<td>
										<Button>Editar</Button>
									</td>
									<td>
										<Button onClick={(e) => this.triggerdelete(item.id)}>Borrar</Button>
									</td>
								</tr>
							);
						})}
					</tbody>
				</Table>
			</div>
		);
	}
}
export default Lista;
