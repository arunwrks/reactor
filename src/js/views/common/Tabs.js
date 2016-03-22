import React from "react";

export default class Tabs extends React.Component {

	constructor() {
		super();
		this.state = {};
	}

	/* Check this function for the properties of this component */
    static propTypes = {
    	type: React.PropTypes.string.required,// Naigation types [tabs, pills (horizontals links), stacked (vertical links)]
        callback: React.PropTypes.func,
        tabs: React.PropTypes.array.required 
        // Format: [ { name: "Home", id: "home-tab", active: true, content: "React Component"} ]
	};

    static defaultProps = {
    	type: "tabs",
        callback: null,
        tabs: []
	};

	isPropDefined(property) {
		return typeof property !== 'undefined';
	}

	componentDidMount() {
		
	}

	render() { 
		let tabIndex = 0;
		let tabs = this.props.tabs.map((tab) => {
			return renderTab(tab, ++tabIndex);
		});

		let tabContents = this.props.tabs.map((tab) => {
			return renderTabContents(tab, ++tabIndex);
		});

		return ( 
			<div>
				<ul className={"nav nav-" + this.props.type} role="tablist">
			      <li role="presentation" className="active">
			      	<a href="#home" id="home-tab" 
			      		role="tab" data-toggle="tab" 
			      		aria-controls="home" aria-expanded="true">
			      		Home
			      	</a>
			      </li>
			   </ul>
			   <div class="tab-content">
					<div role="tabpanel" class="tab-pane fade active in" id="home" aria-labelledby="home-tab">

					</div>
				</div>
			</div>
		);
	}

	renderTab(tab, index) {
		return (
			<li key={"tab-" + tab.id + index} role="presentation" className={tab.active ? "active" : ""}>
		      	<a href={"#" + tab.href} id={tab.id} 
		      		role="tab" data-toggle="tab" 
		      		aria-controls={tab.href} aria-expanded={tab.active ? "true" : "false"}>
		      		{tab.name}
		      	</a>
		    </li>
		);
	}

	renderTabContents(tab, index) {
		return (
			<div key={"tab-content-" + tab.id + index} 
				role="tabpanel" className="tab-pane fade active in" 
				id={tab.href} aria-labelledby={tab.id}>
				//content goes here
			</div>
		);
	}
}