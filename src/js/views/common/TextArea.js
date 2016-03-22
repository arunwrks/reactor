import React from "react";

export default class TextArea extends React.Component {

	constructor() {
		super();
		this.state = { value: null };
	}

	/* Check this function for the properties of this component */
    static propTypes = {
		value: React.PropTypes.string,
        enabled: React.PropTypes.bool,
        placeholder: React.PropTypes.string,
        callback: React.PropTypes.func
	};

    static defaultProps = {
    	value: null,
        enabled: true,
        placeholder: null,
        callback: null
	};
    
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
			<textarea defaultValue={this.props.value} 
					ref="myref" type="text" className="form-control" 
					placeholder={this.props.placeholder} 
					onChange={ () => { this.change(); } }
					disabled={this.props.enabled == 'false' ? 'disabled' : ''}/>
		);
	}
}