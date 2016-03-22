import React from "react";

export default class Glyphicon extends React.Component {

	render() {
		const clazz = `glyphicon glyphicon-${this.props.icon}`;
		const styleprops = { color: (this.props.color ? this.props.color : ""), "font-size": this.props.size };
		return ( <span className={clazz} style={ styleprops }></span> );
	}
}