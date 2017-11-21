import React, { Component } from 'react';

export default class TableRow extends Component {

	changeHandle(e){
		const tar = e.target;
		this.props.typeHandle({ row: tar.dataset.row, col : tar.dataset.col }, tar.value);
	}

	render(){
		const cols = [];

		for(let i = 0; i < this.props.colNumber; i++) {
			cols.push(
				<td key={i}>
					<input 
						data-col={i}
						data-row={this.props.rowIndex}
						onChange={this.changeHandle.bind(this)}
					/>
				</td>
			);
		}

		return(
			<tr>
				<td><input onKeyDown={this.updateTable} /></td>
				<td><input type="number" /></td>
				{cols}
			</tr>
		);
	}
} 

TableRow.defaultProps = {
	colNumber : 2
}