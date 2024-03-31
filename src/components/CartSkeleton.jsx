import React from 'react';

function CartSkeleton() {

	return (
		<article className="min-w-60 shadow-xl px-2 py-2 border rounded-xl animate-pulse">
			<figure className="w-full h-52 rounded-xl overflow-hidden bg-gray-300"></figure>
			<div className="mt-3">
				<h4 className="font-bold bg-gray-300 h-5 w-3/4 mb-2"></h4>
				<p className="text-sm text-gray-600 mt-1 bg-gray-300 h-3 w-full"></p>
				<p className="font-bold mt-3 bg-gray-300 h-5 w-1/4"></p>
			</div>
			<button type="button" className="bg-blue-400 p-3 mt-3 px-10 text-white rounded-lg block w-full bg-gray-300"></button>
		</article>
	);
}

export default CartSkeleton;
