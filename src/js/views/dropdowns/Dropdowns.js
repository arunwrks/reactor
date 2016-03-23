import React from "react";
import Dropdown from "../common/Dropdown";
import DropdownWithHeaders from "../common/DropdownWithHeaders";

export default class Dropdowns extends React.Component {

	render() {
		const facebook = { key: "K3", value: "Facebook" };
		const separator = { separator: true };
		const items = [ 
			{ key: "K1", value: "Apple" }, 
			{ key: "K2", value: "Google" }, 
			separator, 
			facebook 
		];
		const itemsWithHeaders = [
			{ header: "Automobile" },
			{ key: "K1", value: "Mahindra & Mahindra" }, 
			{ key: "K2", value: "Honda" }, 
			{ key: "K3", value: "Renault" } ,
			{ header: "Technology" },
			{ key: "K4", value: "Tata Consultancy Service" }, 
			{ key: "K5", value: "Cognizant Technologies" }, 
			{ key: "K6", value: "Infosys" }
		];
		const url = `http://api.themoviedb.org/3/tv/airing_today?api_key=0a85bfad58bfced1b7e4d5209aedd35b`;
		return (
			<div className="col-md-9">
				<div className="panel panel-default">
				  <div className="panel-heading">Dropdowns</div>
				  <div className="panel-body">
				  	<h5 className="heading">With local data &amp; color</h5>
				  	<div className="row">
				  		<div className="col-md-4">
							<Dropdown items={items} title="Select company" clazz="success"/>
				  		</div>
				  		<div className="col-md-8">
				  			<pre>
								
							</pre>
				  		</div>
				  	</div>
				  	<br/>

				  	<h5 className="heading">Empty</h5>
				  	<div className="row">
				  		<div className="col-md-4">
							<Dropdown />
				  		</div>
				  		<div className="col-md-8">
				  			<pre>
								
							</pre>
				  		</div>
				  	</div>
				  	<br/>

				  	<h5 className="heading">Default selected (local data)</h5>
				  	<div className="row">
				  		<div className="col-md-4">
							<Dropdown items={items} selectedKey="K3" title="Select company"/>
				  		</div>
				  		<div className="col-md-8">
				  			<pre>
								
							</pre>
				  		</div>
				  	</div>
				  	<br/>

				  	<h5 className="heading">Default selected (remote data)</h5>
				  	<div className="row">
				  		<div className="col-md-4">
							<Dropdown url={url} title="Airing today" clazz="info"/>
				  		</div>
				  		<div className="col-md-8">
				  			<pre>
								
							</pre>
				  		</div>
				  	</div>
				  	<br/>

				  	<h5 className="heading">Dropdown with headers &amp; mode (up/down)</h5>
				  	<div className="row">
				  		<div className="col-md-4">
							<DropdownWithHeaders mode="up" items={itemsWithHeaders} title="Select company"/>
				  		</div>
				  		<div className="col-md-8">
				  			<pre>
								
							</pre>
				  		</div>
				  	</div>

				  </div>
				</div>
			</div>
		);
	}
}
