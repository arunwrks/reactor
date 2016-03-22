import React from "react";
import Request from "superagent";

export default class AutoComplete extends React.Component {

	constructor() {
		super();
		this.state = { items: [], selectedKey: null, selectedValue: null, show: false };
	}
    
    /* Check this function for the properties of this component */
    static propTypes = {
		url: React.PropTypes.string,
        items: React.PropTypes.array,
        selectedKey: React.PropTypes.string,
        placeholder: React.PropTypes.string,
        callback: React.PropTypes.func
	};

    static defaultProps = {
    	url: null,
    	items: [],
    	selectedKey: null,
    	selectedValue: null,
		placeholder: "Type to search",
		callback: null
	};

	componentDidMount() {
		if(this.props.items.length > 0) {
			this.setState({ items: this.props.items, selectedKey: this.props.selectedKey });
		}
	}

	handleFocus(e) {
		let event = window.event ? window.event : e;
		if(event.keyCode == 40 && this.state.show) {// Arrow down key
			this.refs.autocomplete.blur(); this.refs.autocompleteResults.focus();
		}
	}

	search() {
		let query = this.refs.autocomplete.value;
		if(query && (query = query.trim()).length>1) {
			query = query.toLowerCase();
			if(this.props.url) {
				//console.log("url: " + this.props.url);
				Request.get(this.props.url, { query }).then((response) => {
					let results = response.body.results;
					if(results && results.length>0) {
						let items = results.map((item) => {
							//console.log(item.id + ": " + item.name);
							return { key: item.id, value: item.name };
						});
						this.setState({ items: items, show: true });
					}
				});
			} else if(this.props.items.length>0) {
				console.log("query: " + query);
				let filtered = this.props.items.filter((item) => {
					return item.key.toLowerCase().indexOf(query) != -1 || item.value.toLowerCase().indexOf(query) != -1;
				});
				this.setState({ items: filtered, show: true });
			}
		} else {
			this.setState({ show: false });
		}
	}

	select(item) {
		this.refs.autocomplete.value = item.value;
		this.setState({ items: [], show: false, selectedKey: item.key, selectedValue: item.value });
	}

	render() {
		const styleprops = { "display": this.state.show ? "block" : "" };
		let filtered = this.state.items.map((item) => {
		
			return (<li tabIndex="-1" key={item.key} onClick={ () => { this.select(item); } } onEnter={ () => { this.select(item); } }> 
						<a href="javscript: void(0);"> { item.value } </a> 
					</li>);
		});
		return (
			<div className="dropdown">
				<input tabIndex="1" defaultValue={ this.state.selectedValue ? this.state.selectedValue : null } 
					ref="autocomplete" type="text" className="form-control" 
					placeholder={ this.props.placeholder } 
					onChange={ () => { this.search(); } } 
					onkeypress={ () => { this.handleFocus(); } }/>
				<ul ref="autocompleteResults" className="dropdown-menu" style={styleprops}>
					{ filtered }
				</ul>
			</div>
		);
	}
}