import React from "react";
import AutoComplete from "../common/AutoComplete";

export default class AutoCompletes extends React.Component {

	render() {
		let url = `http://api.themoviedb.org/3/search/tv?api_key=0a85bfad58bfced1b7e4d5209aedd35b`;
		const items = [
			{ key: "k1", value: "optin 1" },
			{ key: "k2", value: "option 2" },
			{ key: "k3", value: "option 3" },
			{ key: "k4", value: "optin 4" },
			{ key: "k5", value: "option 5" },
			{ key: "k6", value: "option 6" }
		];
		return (
			<div className="col-md-9">
				<div className="panel panel-default">
				  <div className="panel-heading">AutoCompletes</div>
				  <div className="panel-body">
				  	<h5 className="heading">Autocomplete with local data</h5>
				  	<div className="row">
				  		<div className="col-md-4">
							<AutoComplete items={items} placeholder="Search for team members"/>
				  		</div>
				  		<div className="col-md-8">
				  			<pre>
								
							</pre>
				  		</div>
				  	</div>
				  	<br/>

					<h5 className="heading">Autocomplete with remote data</h5>
				  	<div className="row">
				  		<div className="col-md-4">
							<AutoComplete url={url} placeholder="Search for TV series"/>
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
