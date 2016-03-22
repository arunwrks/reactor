import React from "react";

export default class CheckBox extends React.Component {

	constructor() {
		super();
		this.state = { checked: false, enabled: true, inline: false, checkedValue: "Y", uncheckedValue: "N" };
	}

	/* Check this function for the properties of this component */
    static propTypes = {
		checked: React.PropTypes.bool,
        enabled: React.PropTypes.bool,
        inline: React.PropTypes.bool,// if true, will apear in same line
        label: React.PropTypes.string,
        checkedValue: React.PropTypes.string,
        uncheckedValue: React.PropTypes.string,
        callback: React.PropTypes.func
	};

    static defaultProps = {
    	checked: false,
        enabled: true,
        inline: false,
        label: null,
        checkedValue: "Y",
        uncheckedValue: "N",
        callback: null
	};

	isPropDefined(property) {
		return typeof property !== 'undefined';
	}

	componentDidMount() {
		this.setState({ 
			checked: this.props.checked, 
			inline: this.props.inline, 
			enabled: this.props.enabled, 
			checkedValue: this.props.checkedValue, 
			uncheckedValue: this.props.uncheckedValue 
		});
	}
    
	change() {
		if(this.props.callback) this.props.callback();
        this.setState({ checked: !checked });
	}

	enable(enabled = true) {
		this.setState({ enabled });
	}
    
	render() { 

		return ( 
			<div className={this.state.enabled ? "checkbox" + {this.props.inline ? "-inline" : ""} : {this.props.inline ? "checkbox-inline disabled" : "checkbox disabled"}}>
			  <label>
			  	<input type="checkbox" 
			  		value={this.state.checked ? this.state.checkedValue : this.state.uncheckedValue}
			  		onChange={() => { change(); }} checked={this.checked ? "checked" : ""}
			  		disabled={this.props.enabled ? "" : "disabled"}>
			  		{this.props.label}
			  	</label>
			</div>
		);
	}
}