import React from 'react';
import { Card } from 'react-bootstrap';

const Pagprin = () => {
	return (
		<div>
			<h1>Pagina Principal</h1>
			<p>(esta pagina desaparece cuando se utiliza algun otro componente y no regresa hasta recargar)</p>
			<h2>Explicacion de que hace la pagina y algunos detalles</h2>
			<Card className="cartita" border="primary" style={{ width: '18rem' }}>
				<Card.Header>Primera Parte</Card.Header>
				<Card.Body>
					<Card.Title>Explicacion</Card.Title>
					<Card.Text>
						Al principio habia un boton para cada accion en la parte de arriba en la Navbar, pero como fue
						progresando me di cuenta de que no eran necesarios y los fui metiendo dentro del componente
						Listar
					</Card.Text>
				</Card.Body>
			</Card>
			<Card className="cartita" border="primary" style={{ width: '18rem' }}>
				<Card.Header>Segunda Parte</Card.Header>
				<Card.Body>
					<Card.Title>Trabajando con React</Card.Title>
					<Card.Text>
						ya que vi que realizar esta actividad con react podria dar puntos extras decidi tratar de
						implementarla con esta tecnologia ya que justo esta semana pasada empece a tomar un curso sobre
						ReactJS y decidi tomar el reto
					</Card.Text>
				</Card.Body>
			</Card>
			<Card className="cartita" border="primary" style={{ width: '18rem' }}>
				<Card.Header>Problemas con la app</Card.Header>
				<Card.Body>
					<Card.Title>Main problems 1</Card.Title>
					<Card.Text>La funcion editar no esta trabajando correctamente pero aun no se porque</Card.Text>
				</Card.Body>
			</Card>
		</div>
	);
};

export default Pagprin;
