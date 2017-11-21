import React, { Component } from 'react';
import TableRow from './TableRow';
import TableSum from './TableSum';

export default class Table extends Component{

	constructor(props){
		super(props);
		this.state = {
			data : {}
		};
	}

	importanceKeyDown(){

	}

	cellKeyPress({ row, col }, val){
		let obj1 = [];
		let obj2 = [];
		const { data } = this.state;

		obj2[row] = val;
		obj1[col] = obj2;
		let assignedObj;
		/*if(this.state.data[col] !== null) assignedObj = Object.assign(this.state.data[col], obj2);
		else assignedObj = Object.assign(this.state.data, obj1);*/
		assignedObj = Object.assign(data, obj1);

		console.log(col,row,val);
		console.log('mostani data: ');
		console.log('létezik this.state.data['+col+'] :'+(data[col] !== null));
		console.log(data);
		console.log('------------------------');
		this.setState({data : assignedObj});
	}

	render(){
		//console.log(this.state);
		const rows = [];
		const rowLength = this.props.rows === 0 ? 1 : this.props.rows; 
		for(let i = 0; i < rowLength; i++) {
			rows.push(
				<TableRow 
					key={i}
					rowIndex={i}
					typeHandle={this.cellKeyPress.bind(this)}
					colNumber={this.props.cols} 
				/>
			);
		}

		return( 
			<table>
				<thead>
					<tr>
						<th>Szempont</th>
						<th>Fontosság</th>
						<th>Külváros</th>
						<th>Budapest</th>
					</tr>
				</thead>
				<tbody>
					{rows}
				</tbody>
				<TableSum cols={this.props.cols} />
			</table>
		);
	}
}