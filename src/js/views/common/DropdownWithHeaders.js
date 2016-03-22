import React from "react";
import Request from "superagent";

export default class DropdownWithHeaders extends React.Component {

	constructor() {
		super();
		this.state = { items: [], selectedKey: null };
	}

	componentDidMount() {
		if(this.props.url) {
			Request.get(this.props.url).then((response) => {
				let results = response.body.results;
				if(results && results.length>0) {
					// we won't be needing this step as we will get data formatted
					let cnt = 0;
					let selectedKey = null;
					let items = results.map((item) => {
						if(cnt == 2) {
							selectedKey = item.id;
						}
						cnt++;
						return { key: item.id, value: item.name };
					});
					this.setState({ items: items, selectedKey: selectedKey });
					//this.setState({ items: this.response.body, selectedKey: this.props.selectedKey });
				}
			});
		} else if(this.props.items) {
			this.setState({ items: this.props.items, selectedKey: this.props.selectedKey });
		}
	}

	select(item) {
		if(this.props.contextAware == 'false' || item.key == this.state.selectedKey) return;// Do not load if same item is selected
		this.setState({ selectedKey: item.key });// re-render on item select
		if(this.props.callback) this.props.callback(item);// if a callback is provided; extra feature
	}

	getSelectedKey() {
		return this.state.selectedKey;
	}

	getSelectedItem() {
		return this.state.items.filter((item) => { return  !item.header && item.key==this.state.selectedKey });
	}

	render() {
		let headerCnt = 1;
		let selectedItem = null;
		let items = this.state.items.map((item) => {
			if((!item.header) && (item.key == this.state.selectedKey)) {
				selectedItem = item;
			}
			return (<li key={ item.header ? ("dropdown-header-" + headerCnt++) : item.key} 
					   className={ item.header ? "dropdown-header" : (item.header ? "" : (item.key == this.state.selectedKey) ? "active" : "") }>
					   <a href="javascript:void(0);" onClick={ () => { this.select(item); } }> { item.header ? item.header : item.value } </a>
					</li>);
		});
		
		const clazz = this.props.clazz ? `btn btn-${this.props.clazz} dropdown-toggle` : "btn btn-default dropdown-toggle";

		return (
			<div className={this.props.mode == "up" ? "dropup" : "dropdown"}>
			  <button className={clazz} type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
			    { (selectedItem ? selectedItem.value : this.props.title ? this.props.title : "Select") } &nbsp;
			    <span className="caret"></span>
			  </button>
			  <ul className="dropdown-menu">
			  	{ items }
			  </ul>
			</div>
		);
	}
}