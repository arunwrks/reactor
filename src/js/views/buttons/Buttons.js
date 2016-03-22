import React from "react";
import Button from "../common/Button";
import ButtonGroup from "../common/ButtonGroup";
import ButtonToolBar from "../common/ButtonToolBar";
import Dropdown from "../common/Dropdown";
import SplitButton from "../common/SplitButton";

export default class Buttons extends React.Component {

	render() { 
		const items = [ 
			{ key: "K1", value: "Apple" }, 
			{ key: "K2", value: "Google" },
			{ key: "K3", value: "Facebook" }
		];

		return (
			<div className="col-md-9">
				<div className="panel panel-default">
					<div className="panel-heading">Buttons</div>
				  	<div className="panel-body">
				  		<h5 className="heading">Buttons - enabled, disabled, types, tips</h5>
					  	<div className="row">
					  		<div className="col-md-12">
								<Button classes="default" text="Default" tip="Default button"/>
								&nbsp;
								<Button classes="default" enabled={false} text="Disabled" tip="Disabled utton"/>
								&nbsp;
								<Button classes="primary" text="Primary" tip="Primary button"/>
								&nbsp;
								<Button classes="success" text="Success" tip="Success button"/>
								&nbsp;
								<Button classes="info" text="Info" tip="Info button"/>
								&nbsp;
								<Button classes="danger,mini" text="Danger" tip="Danger button"/>
								&nbsp;
								<Button classes="default" text="" tip="Fontawesome" fontawesomeIcon="facebook"/>
								&nbsp;
								<Button classes="default" text="" tip="Glyphicon" glyphIcon="star"/>
								&nbsp;
					  		</div>
					  	</div>
				  		<br/>
				  		<h5 className="heading">Buttons Groups</h5>
					  	<div className="row">
					  		<div className="col-md-6">
								<ButtonGroup>
								  <Button text="Left"/>
								  <Button text="Middle"/>
								  <Button text="Right"/>
								</ButtonGroup>
					  		</div>
					  		<div className="col-md-6">
								<ButtonGroup>
								  <Button text="Save"/>
								  <Button text="Delete"/>
								  <Button text="Approve"/>
								  <ButtonGroup>
								  	<Dropdown items={items} role="group" title="More"/>
								  </ButtonGroup>
								</ButtonGroup>
					  		</div>
					  	</div>
				  		<br/>
				  		<h5 className="heading">Button Toolbar</h5>
					  	<div className="row">
					  		<div className="col-md-12">
					  			<ButtonToolBar>
									<ButtonGroup>
									  <Button text="1"/>
									  <Button text="2"/>
									  <Button text="3"/>
									</ButtonGroup>
									<ButtonGroup>
									  <Button text="20"/>
									  <Button text="30"/>
									  <Button text="50"/>
									</ButtonGroup>
								</ButtonToolBar>
					  		</div>
					  	</div>
                        <br/>
				  		<h5 className="heading">Split Button</h5>
					  	<div className="row">
					  		<div className="col-md-12">
					  			<SplitButton items={items} role="group" title="More"/>
					  		</div>
					  	</div>
				  	</div>
				</div>
			</div>
		);
	}
}