import React from "react";

export default class ButtonGroup extends React.Component {

	constructor() {
		super();
	}

	callback(e) {
		if(this.props.callback) this.props.callback();
		//do something else
		console.log("clicked: " + e.target.innerHTML);
	}

	render() { 

		return ( 
			<div className="btn-group" role="group" onClick={ (e) => { this.callback(e); } }>
				{this.props.children}
			</div>
		);
	}
}