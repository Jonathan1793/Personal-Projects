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
						En la parte de arriba se puede encontrar los botones que sirven para ejecutar cada parte del
						CRUD, las funciones son toggle, presionas y aparece el correspondiente Componente
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
				<Card.Header>Helllo</Card.Header>
				<Card.Body>
					<Card.Title>Texto de mas UuUr</Card.Title>
					<Card.Text>
						Si llegas a ver este texto es que la pagina aun no tiene todas sus funciones trabajando
					</Card.Text>
				</Card.Body>
			</Card>
		</div>
	);
};

export default Pagprin;
