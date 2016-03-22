import React from "react";

export default class Header extends React.Component {

	render() {
		return (
			<nav className="navbar navbar-inverse navbar-fixed-top" role="navigation">
                <div className="container">
                	<div className="navbar-header">
                		<a className="navbar-brand" href="javascript:;">Reactify Bootstrap</a>
                	</div>
                </div>
            </nav>
		);
	}
}