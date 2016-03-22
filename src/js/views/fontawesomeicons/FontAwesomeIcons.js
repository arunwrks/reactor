import React from "react";
import FontAwesomeIcon from "../common/FontAwesomeIcon";

export default class FontAwesomeIcons extends React.Component {

	render() {
		return (
			<div className="col-md-9">
				<div className="panel panel-default">
				  <div className="panel-heading">FontAwesomeIcons</div>
				  <div className="panel-body">
				  	<h5 className="heading">With icon, color &amp; size</h5>
				  	<div className="row">
				  		<div className="col-md-4">
							<FontAwesomeIcon icon="facebook" title="facebook" color="blue" size="30px"/>
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
							<FontAwesomeIcon icon="google-plus" title="google plus" color="red" size="20px"/>
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
							<FontAwesomeIcon icon="twitter" title="twitter"/>
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