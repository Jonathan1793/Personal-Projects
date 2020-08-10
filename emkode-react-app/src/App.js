import React, { Component } from 'react';
import Registro from './Componentes/RegistroAltas';
import './App.css';
import Navbar from './Componentes/navbar';
import Editar from './Componentes/Editar';
import Lista from './Componentes/listar';
import Pagprin from './Componentes/PaginaStandard';
import Borrar from './Componentes/Borrar';
import LetsDelete from './Componentes/Borrar';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			activeagregar: false,
			activeedit: false,
			activelistar: false,
			pagdef: true,
			activeBorrar: false
		};
	}

	triggeragregar = () => {
		this.setState({
			activeagregar: !this.state.activeagregar,
			activeedit: false,
			activelistar: false,
			pagdef: false,
			activeBorrar: false
		});
	};
	triggereditar = () => {
		this.setState({
			activeedit: !this.state.activeedit,
			activeagregar: false,
			activelistar: false,
			pagdef: false,
			activeBorrar: false
		});
	};
	triggerlistar = () => {
		this.setState({
			activelistar: !this.state.activelistar,
			activeagregar: false,
			activeedit: false,
			pagdef: false,
			activeBorrar: false
		});
	};

	triggerborrar = () => {
		this.setState({
			activealistar: true,
			activeagregar: false,
			activeedit: false,
			pagdef: false,
			activeBorrar: true
		});
	};
	render() {
		return (
			<div className="App">
				<Navbar
					agregar={this.triggeragregar}
					editar={this.triggereditar}
					listar={this.triggerlistar}
					Borrar={this.triggerborrar}
				/>
				{this.state.pagdef && <Pagprin />}
				{this.state.activeagregar && <Registro />}
				{this.state.activeedit && !this.state.activeagregar && <Editar />}
				{this.state.activeBorrar && <LetsDelete />}
				{this.state.activelistar && <Lista />}
			</div>
		);
	}
}

export default App;
