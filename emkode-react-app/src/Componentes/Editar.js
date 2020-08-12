import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';
import data from '../db.json';

let lista = data.employees;
class Editar extends Component {
	constructor(props) {
		super(props);
		this.state = {
			// id: numeroid,
			name: '',
			last_name: '',
			email: '',
			phone: ''
		};
	}
	cambiar = (event) => {
		this.setState({
			[event.target.name]: event.target.value
		});
	};
	btnclick = (event) => {
		const lastId = lista[lista.length - 1].id + 1;

		lista.push({ ...this.state, id: lastId });
		this.setState({
			name: '',
			last_name: '',
			email: '',
			phone: ''
		});
	};
	render() {
		return (
			<div className="editar">
				<div className="Editar">
					<h1>Editar personal</h1>
					<Form.Label htmlFor="name">Nombre</Form.Label>
					<Form.Control
						value={this.state.name}
						onChange={this.cambiar.bind(this)}
						name="name"
						id="name"
						size="sm"
						type="text"
						placeholder="Nombre"
					/>
					<Form.Label htmlFor="last_name">Apellido</Form.Label>
					<Form.Control
						value={this.state.last_name}
						onChange={this.cambiar.bind(this)}
						name="last_name"
						id="last_name"
						size="sm"
						type="text"
						placeholder="Apellido"
					/>
					<Form.Label htmlFor="email">Email</Form.Label>
					<Form.Control
						value={this.state.email}
						onChange={this.cambiar.bind(this)}
						name="email"
						id="email"
						type="email"
						placeholder="Enter email"
					/>
					<Form.Label htmlFor="phone">Telefono</Form.Label>
					<Form.Control
						value={this.state.phone}
						onChange={this.cambiar.bind(this)}
						name="phone"
						id="phone"
						size="sm"
						type="text"
						placeholder="Telefono"
						className="Inputs"
					/>
					<Button onClick={this.btnclick}>Guardar cambios</Button>
				</div>
			</div>
		);
	}
}

export default Editar;
