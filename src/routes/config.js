export default {
	menus: [
		// 菜单相关路由
		{
			key: '/',
			title: '首页',
			icon: 'mobile',
			file: 'dashboard/Dashboard'
		},
		{
			key: '/ui',
			title: 'UI',
			icon: 'scan',
			subs: [
				{ key: '/ui/buttons', title: '按钮', component: 'Buttons', file: 'ui/Buttons' },
				{ key: '/ui/icons', title: '图标', component: 'Icons', file: 'ui/Icons' },
				{ key: '/ui/spins', title: '加载中', component: 'Spins', file: 'ui/Spins' },
				{ key: '/ui/modals', title: '对话框', component: 'Modals', file: 'ui/Modals' },
				{ key: '/ui/notifications', title: '通知提醒框', component: 'Notifications', file: 'ui/Notifications' },
				{ key: '/ui/tabs', title: '标签页', component: 'Tabs', file: 'ui/Tabs' },
				{ key: '/ui/banners', title: '轮播图', component: 'Banners', file: 'ui/banners/index' },
				{ key: '/ui/wysiwyg', title: '富文本', component: 'WysiwygBundle', file: 'ui/Wysiwyg' },
				{ key: '/ui/drags', title: '拖拽', component: 'Drags', file: 'ui/Draggable' },
				{ key: '/ui/gallery', title: '画廊', component: 'Gallery', file: 'ui/Gallery' },
				{ key: '/ui/map', title: '地图', component: 'MapUi', file: 'ui/map/index' }
			]
		},
		{
			key: '/animation',
			title: '动画',
			icon: 'rocket',
			subs: [
				{
					key: '/animation/basicAnimations',
					title: '基础动画',
					component: 'BasicAnimations',
					file: 'animation/BasicAnimations'
				},
				{
					key: '/animation/exampleAnimations',
					title: '动画案例',
					component: 'ExampleAnimations',
					file: 'animation/ExampleAnimations'
				}
			]
		},
		// {
		//     key: '/app/table', title: '表格', icon: 'copy',
		//     subs: [
		//         { key: '/app/table/basicTable', title: '基础表格', component: 'BasicTable', file: ''},
		//         { key: '/app/table/advancedTable', title: '高级表格', component: 'AdvancedTable', file: ''},
		//         { key: '/app/table/asynchronousTable', title: '异步表格', component: 'AsynchronousTable', file: ''},
		//     ],
		// },
		// {
		//     key: '/app/form', title: '表单', icon: 'edit',
		//     subs: [
		//         { key: '/app/form/basicForm', title: '基础表单', component: 'BasicForm', file: ''},
		//     ],
		// },
		{
			key: '/chart',
			title: '图表',
			icon: 'area-chart',
			subs: [
				{ key: '/chart/echarts', title: 'echarts', component: 'Echarts', file: 'charts/Echarts' },
				{ key: '/chart/recharts', title: 'recharts', component: 'Recharts', file: 'charts/Recharts' }
			]
		},
		// {
		//     key: '/subs4', title: '页面', icon: 'switcher',
		//     subs: [
		//         { key: '/login', title: '登录' },
		//         { key: '/404', title: '404' },
		//     ],
		// },
		{
			key: '/auth',
			title: '权限管理',
			icon: 'safety',
			subs: [
				{ key: '/auth/basic', title: '基础演示', component: 'AuthBasic', file: 'auth/Basic' },
				{
					key: '/auth/routerEnter',
					title: '路由拦截',
					component: 'RouterEnter',
					auth: 'auth/testPage',
					file: 'auth/RouterEnter'
				}
			]
		},
		{
			key: '/cssModule',
			title: 'cssModule',
			icon: 'star',
			component: 'Cssmodule',
			file: 'cssmodule'
		}
	],
	others: [] // 非菜单相关路由
};
