import React, { Component } from 'react';
import Registro from './Componentes/RegistroAltas';
import './App.css';
import Navbar from './Componentes/navbar';
import Editar from './Componentes/Editar';
import Empleado from './Componentes/listar';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			activeagregar: false,
			activeedit: false
		};
	}

	triggeragregar = () => {
		this.setState({
			activeagregar: !this.state.activeagregar,
			activeedit: false
		});
	};
	triggereditar = () => {
		this.setState({
			activeedit: !this.state.activeedit,
			activeagregar: false
		});
	};
	render() {
		return (
			<div className="App">
				<Navbar agregar={this.triggeragregar} editar={this.triggereditar} />
				{this.state.activeagregar && <Registro />}
				{this.state.activeedit && !this.state.activeagregar && <Editar />}
			</div>
		);
	}
}

export default App;
