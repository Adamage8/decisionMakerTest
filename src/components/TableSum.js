import React, { Component } from 'react';

export default class TableSum extends Component{

	render(){
		const columns = [];
		for(let i = 0; i < this.props.cols; i++){
			columns.push(<td key={i}>0</td>);
		}

		return (
			<tr>
				<td colSpan="2">Összesen</td>
				{columns}
			</tr>
		);
	}

}

