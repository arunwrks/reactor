import React from "react";
import Glyphicon from "../common/Glyphicon";

export default class Glyphicons extends React.Component {

	render() {
		return (
			<div className="col-md-9">
				<div className="panel panel-default">
				  <div className="panel-heading">Glyphicons</div>
				  <div className="panel-body">
				  	<h5 className="heading">With icon, color &amp; size</h5>
				  	<div className="row">
				  		<div className="col-md-4">
							<Glyphicon icon="star" title="star" color="red" size="30px"/>
				  		</div>
				  		<div className="col-md-8">
				  			<pre>
								
							</pre>
				  		</div>
				  	</div>
				  	<br/>

					<h5 className="heading">With icon, color &amp; size</h5>
				  	<div className="row">
				  		<div className="col-md-4">
							<Glyphicon icon="off" title="off" color="blue" size="20px"/>
				  		</div>
				  		<div className="col-md-8">
				  			<pre>
								
							</pre>
				  		</div>
				  	</div>
				  	<br/>

				    <h5 className="heading">With icon only</h5>
				  	<div className="row">
				  		<div className="col-md-4">
							<Glyphicon icon="file" title="file"/>
				  		</div>
				  		<div className="col-md-8">
				  			<pre>
								
							</pre>
				  		</div>
				  	</div>
				  	<br/>
				  </div>
				</div>
			</div>
		);
	}
}