import React from "react";

export default class Button extends React.Component {

	constructor() {
		super();
		this.state = { enabled: true };
	}

	/* Check this function for the properties of this component */
    static propTypes = {
		classes: React.PropTypes.string,// css class names [default, primary, info, success, danger, mini]
        callback: React.PropTypes.func,
        enabled: React.PropTypes.bool,
        tip: React.PropTypes.string,
        text: React.PropTypes.string,
        fontawesomeIcon: React.PropTypes.string,
        glyphIcon: React.PropTypes.string
	};

    static defaultProps = {
		classes: 'default',
    	text: "",
    	enabled: true,
    	tip: null,
    	fontawesomeIcon: null,
    	glyphIcon: null
	};

	callback() {
		if(this.props.callback) this.props.callback();
		//do something else
	}

	render() { 
		let classes = 'btn' + this.props.classes.split(",").map((c) => {
			return ` btn-${c}`;
		});

		return ( 
			<button type="button" 
				className={ classes + (this.props.enabled ? '' : ' disabled') } 
				title={this.props.tip} 
				disabled={ this.props.enabled ? '' : 'disabled' }
				onClick={ () => { this.callback(); } }>
				{this.props.fontawesomeIcon ? this.renderFontawesomeIcon() : null}
				{this.props.glyphIcon ? this.renderGlyphIcon() : null}
				{this.props.text}
			</button>
		);
	}

	renderFontawesomeIcon() {
		return (<span className={'fa fa-' + this.props.fontawesomeIcon} />);
	}

	renderGlyphIcon() {
		return (<span className={'glyphicon glyphicon-' + this.props.glyphIcon} />);
	}
}