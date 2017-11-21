import React, { Component } from 'react';
import Table from './components/Table';
import ControlPanel from './components/ControlPanel';

export default class DecisionMaker extends Component{
	
	constructor(props){
		super(props);
		this.state = {
			cols : this.props.cols,
			rows : this.props.rows
		}
	}

	changeRow(value){
		this.setState({rows : value});
	}
	changeCol(value){
		this.setState({cols: value});
	}


	render(){
		return(
			<div>
				<ControlPanel rowHandle={this.changeRow.bind(this)} colHandle={this.changeCol.bind(this)} {...this.props} />
	        	<Table {...this.state} />
        	</div>
        )
	}
}