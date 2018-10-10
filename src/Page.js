import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import NotFound from '@/components/pages/NotFound';
import Login from '@/components/pages/Login';
import Wrapper from '@/pages/Wrapper';

export default () => (
	<Router>
		<Switch>
			<Route exact path="/" component={Wrapper} />
			{/* <Route path="/app" component={Wrapper} /> */}
			<Route path="/404" component={NotFound} />
			<Route path="/login" component={Login} />
			<Route component={Wrapper} />
			<Route component={NotFound} />
		</Switch>
	</Router>
);
