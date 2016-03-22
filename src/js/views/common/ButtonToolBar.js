import React from "react";

export default class ButtonToolBar extends React.Component {

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
			<div className="btn-toolbar" role="toolbar" onClick={ (e) => { this.callback(e); } }>
				{this.props.children}
			</div>
		);
	}
}