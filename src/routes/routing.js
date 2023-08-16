import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Layout from '../components/Layout';
import Home from '../pages/Home/Home';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Layout />,
		children: [
			{
				path: '',
				element: <Home />,
			},
			{
				path: '/MyPage',
				element: <MyPage />,
			},
		],
	},
]);

export default router;
