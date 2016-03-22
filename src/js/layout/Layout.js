import React from "react";
import { Link, IndexLink } from "react-router";
import Header from "./Header"

export default class Layout extends React.Component {

	constructor() {
        super()
        this.state = { navigated: true };
    }
    
    navigate() {
        const navigated = !this.state.navigated;
        this.setState({ navigated });
    }

	render() {
		const { location } = this.props;
        const glyphiconsClass = location.pathname === "/" ? "list-group-item active" : "list-group-item";
        const fontawesomesClass = location.pathname.match(/^\/fontawesomes/) ? "list-group-item active" : "list-group-item";
        const dropdownsClass = location.pathname.match(/^\/dropdowns/) ? "list-group-item active" : "list-group-item";
        const autocompletesClass = location.pathname.match(/^\/autocompletes/) ? "list-group-item active" : "list-group-item";
        const buttonsClass = location.pathname.match(/^\/buttons/) ? "list-group-item active" : "list-group-item";

		return (
			<div>
				<Header/>
				<div className="container app-body">
					<div className="row">
						<div className="col-md-3">
							<ul className="list-group">
								<IndexLink to="/" onClick={ () => { this.navigate(); } } className={ glyphiconsClass }>Glyphicons</IndexLink>
								<Link to="fontawesomes" onClick={ () => { this.navigate(); } } className={ fontawesomesClass }>FontawesomeIcons</Link>
								<Link to="dropdowns" onClick={ () => { this.navigate(); } } className={ dropdownsClass }>Dropdowns</Link>
								<Link to="autocompletes" onClick={ () => { this.navigate(); } } className={ autocompletesClass }>AutoCompletes</Link>
								<Link to="buttons" onClick={ () => { this.navigate(); } } className={ buttonsClass }>Buttons</Link>
							</ul>
						</div>
						{ this.props.children }
					</div>
				</div>
				
			</div>
		);
	}
}