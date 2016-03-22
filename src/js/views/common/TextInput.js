import React from "react";

export default class TextInput extends React.Component {

	constructor() {
		super();
		this.state = { value: null };
	}
    
    componentDidMount() {
        if(this.props.value) reRender(this.props.value);
    }

	change() {
		if(this.props.callback) this.props.callback();
        reRender(this.refs.myref.value);
	}
    
    reRender(value) {
        this.setState({ value });
    }

	render() { 

		return ( 
			<input defaultValue={this.props.value} 
					ref="myref" type="text" className="form-control" 
					placeholder={this.props.placeholder} 
					onChange={ () => { this.change(); } }
					disabled={this.props.enabled == 'false' ? 'disabled' : ''}/>
		);
	}
}