import React, { Component } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import Loadable from 'react-loadable';
import { Spin } from 'antd';
import routesConfig from './config';
import NotFound from '@/components/pages/NotFound';

export default class CRouter extends Component {
	requireAuth = (permission, component) => {
		const { auth } = this.props;
		const { permissions } = auth.data;
		// const { auth } = store.getState().httpData;
		if (!permissions || !permissions.includes(permission)) return <Redirect to={'404'} />;
		return component;
	};
	requireLogin = (component, permission) => {
		const { auth } = this.props;
		const { permissions } = auth.data;
		if (process.env.NODE_ENV === 'production' && !permissions) {
			// 线上环境判断是否登录
			return <Redirect to={'/login'} />;
		}
		return permission ? this.requireAuth(permission, component) : component;
	};
	render() {
		const Loading = ({ isLoading, error }) => {
			if (isLoading) {
				return (
					<div style={{ textAlign: 'center', padding: '50px' }}>
						<Spin />
					</div>
				);
			} else if (error) {
				return <Redirect to="/404" />;
			} else {
				return null;
			}
		};
		const requireLogin = this.requireLogin;
		return (
			<Switch>
				{Object.keys(routesConfig).map((key) =>
					routesConfig[key].map((r) => {
						const route = (r) => {
							return (
								<Route
									key={r.route || r.key}
									exact
									path={r.route || r.key}
									component={Loadable({
										loader: () => import(`../components/${r.file}`),
										render(loaded, props) {
											let Component = loaded.default;
											return r.login ? (
												<Component {...props} />
											) : (
												requireLogin(<Component {...props} />, r.auth)
											);
										},
										loading: Loading
									})}
								/>
							);
						};
						return r.file ? route(r) : r.subs.map((r) => route(r));
					})
				)}

				<Route component={NotFound} />
			</Switch>
		);
	}
}
