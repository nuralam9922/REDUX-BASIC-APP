import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { createBrowserRouter } from 'react-router-dom';
import { RouterProvider } from 'react-router-dom';

import UserCartProduct from './pages/UserCartProducts.jsx';
import Home from './pages/Home.jsx';
import ProductDetails from './pages/ProductDetails.jsx';
import { Provider } from 'react-redux';
import { store } from './store/store.js';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		children: [
			{
				path: '/',
				element: <Home />,
			},
			{
				path: 'cart',
				element: <UserCartProduct />,
			},
			{
				path: 'product/:ProductId',
				element: <ProductDetails />,
			},
		],
	},
]);
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<QueryClientProvider client={queryClient}>
			<Provider store={store}>
				<RouterProvider router={router} />
			</Provider>
		</QueryClientProvider>
		
	</React.StrictMode>
);
