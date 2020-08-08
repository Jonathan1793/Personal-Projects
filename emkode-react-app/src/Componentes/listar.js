import React from 'react';
import data from '../db.json';
import { Table } from 'react-bootstrap';

let datos = data.employees;

// for (let i = 0; i < datos.length; i++) {
// 	for (let j = 0; j < datos.length[i]; j++) {
// 		console.log(datos[i][j]);
// 	}
// }

const Lista = () => {
	return (
		<div>
			<Table>
				<tbody>
					{datos.map(function(item, key) {
						return (
							<tr key={key}>
								<td>{item.id}</td>
								<td>{item.name}</td>
								<td>{item.last_name}</td>
								<td>{item.email}</td>
								<td>{item.phone}</td>
							</tr>
						);
					})}
				</tbody>
			</Table>
		</div>
	);
};
export default Lista;
