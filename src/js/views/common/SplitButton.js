import React from "react";
import Request from "superagent";

export default class SplitButton extends React.Component {

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
    
    /* calllback if only button is clicked */
    btnCallback() {
        if(this.props.btnCallback) this.props.btnCallback();
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
		return this.state.items.filter((item) => { return  !item.separator && item.key==this.state.selectedKey });
	}

	render() {
		let separatorCnt = 1;
		let selectedItem = null;
		let items = this.state.items.map((item) => {
			if((!item.separator) && (item.key == this.state.selectedKey)) {
				selectedItem = item;
			}
			return (<li key={ item.separator ? ("separator-" + separatorCnt++) : item.key} 
					   role={ item.separator ? "separator" : "" } 
					   className={ item.separator ? "divider" : (item.separator ? "" : (item.key == this.state.selectedKey) ? "active" : "") }>
					   <a href="javascript:void(0);" onClick={ () => { this.select(item); } }> { item.separator ? "" : item.value } </a>
					</li>);
		});
		
		const clazz = this.props.clazz ? `btn btn-${this.props.clazz} dropdown-toggle` : "btn btn-default dropdown-toggle";

		return (
              <div className={this.props.mode == "up" ? "btn-group dropup" : "btn-group"}>
                  <button type="button" className={clazz}>
                    { (selectedItem ? selectedItem.value : this.props.title ? this.props.title : "Select") }
                  </button>
                  <button type="button" className={ clazz + ' dropdown-toggle' } data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" onClick={ () => { this.btnCallback(); } }>
                    <span className="caret"></span>
                    <span className="sr-only">Toggle Dropdown</span>
                  </button>
                  <ul className="dropdown-menu">
                    { items }
                  </ul>
                </div>
		);
	}
}