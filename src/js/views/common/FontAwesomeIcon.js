import React from "react";

export default class FontAwesomeIcon extends React.Component {

	render() {
		const clazz = `fa fa-${this.props.icon}`;
		const styleprops = { color: (this.props.color ? this.props.color : ""), "font-size": this.props.size };
		return ( <i className={clazz} style={ styleprops }></i> );
	}
}