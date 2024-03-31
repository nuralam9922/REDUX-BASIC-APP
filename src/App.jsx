import React from 'react';
import Navbar from './components/Navbar';
import { Outlet } from 'react-router-dom';

function App() {
	return (
		<div className="flex justify-center relative">
			<div className=" px-5 w-full max-w-screen-2xl">
				<Navbar />
				<Outlet />
			</div>
		</div>
	);
}

export default App;
