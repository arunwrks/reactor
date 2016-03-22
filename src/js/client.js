import React from "react";
import { render } from "react-dom";
import { Router, Route, IndexRoute, hashHistory } from "react-router";

import Layout from "./layout/Layout";
import Glyphicons from "./views/glyphicons/Glyphicons";
import FontAwesomeIcons from "./views/fontawesomeicons/FontAwesomeIcons";
import Droupdowns from "./views/dropdowns/Dropdowns";
import AutoCompletes from "./views/autocompletes/AutoCompletes";
import Buttons from "./views/buttons/Buttons";

const app = document.getElementById('app');

render(
	<Router history={hashHistory}>
	    <Route path="/" component={Layout}>
	      <IndexRoute component={Glyphicons}></IndexRoute>
	      <Route name="fontawesomes" path="fontawesomes" component={FontAwesomeIcons}></Route>
	      <Route name="dropdowns" path="dropdowns" component={Droupdowns}></Route>
	      <Route name="autocompletes" path="autocompletes" component={AutoCompletes}></Route>
	      <Route name="buttons" path="buttons" component={Buttons}></Route>
	    </Route>
	</Router>
	, app);