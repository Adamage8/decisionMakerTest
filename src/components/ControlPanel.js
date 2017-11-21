import React, { Component } from 'react';

export default class ControlPanel extends Component{

	constructor(props){
		super(props);
		this.state = {
			rowValue : this.props.rows,
			colValue : this.props.cols
		}
	}

	rowChange(e){
		const val = e.target.value;
		if(val > 0){
			this.props.rowHandle(e.target.value);
			this.setState({rowValue : e.target.value});
		}
	}

	colChange(e){
		const val = e.target.value;
		if(val > 1){
			this.props.colHandle(e.target.value);
			this.setState({colValue : e.target.value});
		}
	}

	render(){
		return (
			<div>
				<input type="number" onChange={this.rowChange.bind(this)} value={this.state.rowValue} />
				<input type="number" onChange={this.colChange.bind(this)} value={this.state.colValue} />
			</div>
		)
	}
}