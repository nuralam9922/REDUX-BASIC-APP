import React, { useEffect, useState } from 'react';
import Cart from '../components/Cart';
import CartSkeleton from '../components/CartSkeleton';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts } from '../store/apiSlice';
import Navbar from '../components/Navbar';

function Home() {
	const [data, setData] = useState([]);
	const productData = useSelector((state) => state.apiSlice);
	const dispatch = useDispatch();
	document.title = 'Home';

	useEffect(() => {
		if (productData.products) {
			setData(productData.products);
		}
	}, [productData]);

	useEffect(() => {
		if (!productData.products.length > 0) {
			dispatch(fetchProducts());
		}
	}, []);

	return (
		<div className="warper">
			<div className="cartWarper carts mt-10 gap-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
				{productData.status === 'loading' ? (
					Array(10)
						.fill()
						.map((_, i) => <CartSkeleton key={i} />)
				) : productData.status === 'succeeded' ? (
					data?.map((item) => <Cart key={item?.id} item={item} />)
				) : (
					<p className="text-center font-semibold absoluteCenter">Something went wrong :: {productData.error}</p>
				)}
			</div>
		</div>
	);
}

export default Home;
