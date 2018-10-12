import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import loadable from './loadable';
import routesConfig from './config';
import NotFound from '@/components/pages/NotFound';

export default class CRouter extends Component {
	render() {
		const { auth } = this.props;
		const route = (r, i) => {
			return (
				<Route
					key={r.route || r.key}
					exact={r.exact === false ? false : true}
					path={r.route || r.key}
					component={loadable(r, auth)}
				/>
			);
		};
		const loop = (config) => {
			if (config.file) {
				return route(config);
			}
			if (!config.hideChildrenInMenu && config.subs) {
				return config.subs.map((item) => loop(item));
			}
		};
		return (
			<Switch>
				{Object.keys(routesConfig).map((key) =>
					routesConfig[key].map((r) => {
						return loop(r);
					})
				)}
				<Route component={NotFound} />
			</Switch>
		);
	}
}
