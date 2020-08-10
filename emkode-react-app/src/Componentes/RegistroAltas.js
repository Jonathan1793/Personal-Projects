import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';
import data from '../db.json';
// const agregarcontenido = () => {};
let lista = data.employees;

class Registro extends Component {
	constructor(props) {
		super(props);
		this.state = {
			// id: numeroid,
			name: '',
			last_name: '',
			email: '',
			phone: ''
		};

		console.log(lista.length);
	}

	cambiar = (event) => {
		this.setState({
			[event.target.name]: event.target.value
		});
	};

	//Añade el nuevo Json creado por esta clase dentro de la lista y automaticamente se actauliza la lista
	btnclick = (event) => {
		// let numero = 0;
		// for (let i = 0; i <= lista.length; i++) {
		// 	numero++;
		// }
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
			<div className="Registro">
				<h1>Agregar Personal</h1>
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
				<Button onClick={this.btnclick}>Agregar a la lista</Button>

				<p>{JSON.stringify(this.state)}</p>
			</div>
		);
	}
}

export default Registro;
