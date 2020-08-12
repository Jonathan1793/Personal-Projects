import React, { Component } from 'react';
import data from '../db.json';
import { Table, Form, FormControl, Button } from 'react-bootstrap';
import Editar from './Editar';
import Registro from './RegistroAltas';

let datos = data.employees;

function searchfor(term) {
	return (x) => {
		return (
			x.name.toLowerCase().includes(term.toLowerCase()) ||
			x.last_name.toLowerCase().includes(term.toLowerCase()) ||
			x.email.toLowerCase().includes(term.toLowerCase()) ||
			x.phone.toLowerCase().includes(term)
		);
	};
}

class Lista extends Component {
	constructor(props) {
		super(props);
		this.state = {
			datos: datos,
			term: '',
			mostraredit: false,
			mostraragregar: false
		};
	}
	searchHandler = (event) => {
		this.setState({
			term: event.target.value
		});
	};
	triggerdelete = (id) => {
		let datos = [ ...this.state.datos ];
		let datoborrar = datos.findIndex((item) => item.id === id);

		datos.splice(datoborrar, 1);
		this.setState({
			datos
		});
		console.log('fin', datos);
	};

	triggereditar = () => {
		this.setState({
			mostraredit: !this.state.mostraredit
		});
	};
	triggearagregar = () => {
		this.setState({
			mostraragregar: !this.state.mostraragregar,
			datos
		});
	};
	render() {
		const { term, datos } = this.state;
		return (
			<div>
				{this.state.mostraredit && <Editar />};
				{this.state.mostraragregar && <Registro />}
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
										<Button onClick={this.triggereditar}>Editar</Button>
									</td>
									<td>
										<Button onClick={(e) => this.triggerdelete(item.id)}>Borrar</Button>
									</td>
								</tr>
							);
						})}
					</tbody>
				</Table>
				<Button onClick={this.triggearagregar}>Agregar personal</Button>
			</div>
		);
	}
}
export default Lista;
