import React from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { decreaseQuantity, deleteItem, increaseQuantity } from '../store/CartSlice';
import { addSaveForLetter } from '../store/saveForLetterSlice';
import Cart from '../components/Cart';
import { useEffect } from 'react';

function UserCartProducts() {
	const cartItems = useSelector((state) => state.cartSlice);
	const saveItems = useSelector((state) => state.saveForLetterSlice);
	const dispatch = useDispatch();
	document.title = 'cart';
	useEffect(() => {
		window.scrollTo({
			top: 0,
			// behavior: 'smooth', // for smooth scrolling, or 'auto' for instant scrolling
		});
	}, []);
	// if item not present this ui showing
	if (cartItems && cartItems.length == 0) {
		return (
			<div className="absoluteCenter w-full px-5 flex items-center justify-center flex-col">
				<h1 className=" font-extrabold text-2xl text-center">Plese add some product in cart</h1>
				<Link to={'/'}>
					<button type="button" className="bg-blue-400 text-white px-4 py-2 rounded-lg mt-4 w-full  capitalize">
						continue Shoping
					</button>
				</Link>
			</div>
		);
	}
	return (
		<main className="grid grid-cols-1 lg:grid-cols-2 gap-4 pb-10">
			<section className="leftSide">
				{cartItems &&
					cartItems.length > 0 &&
					cartItems.map((item) => {
						return (
							<div key={item.id} className="flex items-start border rounded-lg p-4 shadow-lg flex-col md:flex-row">
								<div className="imagePlaceHolder w-full md:w-60 lg:w-52  flex-shrink-0 h-52 bg-gray-300 rounded-lg mr-4">
									<img
										onError={(e) =>
											(e.target.src =
												'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMwAAADACAMAAAB/Pny7AAAAVFBMVEXv8fNod4dicoL4+fuHkp+qsrr9/f5XaHqttb7FytB8iZbBx81TZnjn6e319vheb4B1g5HL0NWhqrNtfIvZ3eHT19yao62NmKO3vsbg4uaUnqlHXHCmgbe/AAADBElEQVR4nO3c65aaMBiFYUgQEDUhYBSn93+fxbbjEIiHjFE20/38bcfFuzh8RNEkISIiIiIiIiIiIiIiIiIiIiIiIiIiovuUjG+ultyUq8jKzUwtMhNpfPVpjpY8K17Qkgo9Q4s0+hUtaVqU7z9vZPeKg6wnsvz9MeVrWlJRMYYx0xhdxIEQo5t1FJ0GiCk2KsoL7rYQMXFekDGRMOYWxkTyf8QoqfoVaPjlGjBGJqZsDk23D76Px4vJ11mbCiHa+rALzIGLyUvxb5UjRB24c9Bi8tVg9dnXBJ04YDHSOItPnQW9IFhMUo1W0l3IrsGKUaZ2W/RHyAtixUzWniILOWuwYlQzOspEbX5OTLrgGDnZM5UdxZzvdK71gcVs2vE5c3K2XO4OVfVx7TzCiklOtbtrdOO27MVZuvbXgMXk7nEmaucok/u/byaJwl8DFjOamqIcbrSyl3/z16DFqMGBJlLnIFOm/Qrd+mrQYhJ5Oqb6fGJoXXdquMXGOZ98+wYuJlHJ5pBVVXVcWWcB4Lb0C4TpO4d4Meeck7X7k3KPsXo8gtJJDWJMv+lKuRs6bek3uR3fUmPGTP6nbT0fsol2tG8WESOt8H5gOD7SlhDzOSs9NWI9vEgsIEbZGx+wO/MGP0aZ6ymjGvgYZ+77DKYnfIznmjyiLzXoMfdbBtc07Jh+Vj7wRMpl3kDH+Ob+rRrkGP/cv1EDHCOtfvhBoX4lLZFjrs99b835mgYbo2zgw2hbI1Fj+rkf+jDa1iSgMffmvk+xwXh2ZtLy2DV55PNvsGK+1/IVBRTz6KxcQszd++QFxUgbfB2DjQmbldgx0m6fbkGJUVEeQseI+cbcx4159pqMFLOO04IQ8/SsBIqJ1zJ/jHx67uPEXHtvfIkxch9hVoLEmBhzHyRGNzFTZv/+zE+KiYwxjPmpMSbenHToZoZvnst4dzCOX7v3tyTJTv955icuXZh5fhJAdccssuMq9PsQ0cg89u805LP9UgMRERERERERERERERERERERERERERHN5zedIj3E0w87JAAAAABJRU5ErkJggg==')
										}
										src={item.images[0]}
										className="w-full h-full object-cover"
										alt={item.title}
									/>
								</div>
								<div>
									<h2 className="text-lg font-bold mb-2">{item.title}</h2>
									<p className="text-sm text-gray-600 mb-2">{item.description.split(' ').slice(0, 10).join(' ')}...</p>
									<p className="text-lg font-bold">${item.price}</p>
									<div className="ml-auto flex items-center gap-3 mt-3">
										<button
											onClick={() => item.quantity < 10 && dispatch(increaseQuantity(item.id))}
											type="button"
											className="bg-blue-400 text-white size-7 flex items-center justify-center rounded-lg shadow-md hover:shadow-xl transition duration-300"
										>
											+
										</button>
										<span className="text-lg font-bold">{item.quantity}</span>
										<button
											onClick={() => item.quantity > 1 && dispatch(decreaseQuantity(item.id))}
											type="button"
											className="bg-blue-400 text-white size-7 flex items-center justify-center rounded-lg shadow-md hover:shadow-xl transition duration-300"
										>
											-
										</button>
									</div>
									<p className="text-red-600 capitalize mt-2">{item.quantity === 1 && ' Minimum 1 product required'}</p>
									<p className="text-red-600 capitalize mt-2">{item.quantity === 10 && ' Maximum limit 10 products'}</p>
									<div className="flex items-center gap-5 mt-3">
										<p onClick={() => dispatch(deleteItem(item.id))} className="hover:underline cursor-pointer">
											Delete Item
										</p>
										{!saveItems.some((saveItem) => saveItem.id === item.id) && (
											<p onClick={() => dispatch(addSaveForLetter(item))} className="hover:underline cursor-pointer">
												Save for letter
											</p>
										)}
									</div>
								</div>
								{/* <button className="ml-auto bg-blue-400 text-white px-4 py-2 rounded-lg">Buy Now</button> */}
							</div>
						);
					})}
			</section>

			<section className="rightSide">
				<div className="flex flex-col justify-center items-center bg-gray-100 p-4 rounded-lg shadow-lg">
					<h2 className="text-xl font-bold mb-4">Order Summary</h2>
					<div className="flex flex-col space-y-2 w-full">
						<div className="flex justify-between">
							<span>Total Price:</span>
							<span className="font-bold">${cartItems?.reduce((price, item) => price + item.price * item.quantity, 0)}</span>
						</div>
						<div className="flex justify-between">
							<span>Delivery Charges:</span>
							<span className="font-bold line-through">$5</span>
						</div>
						<hr className="my-2 w-full border-t border-gray-300" />
						<div className="flex justify-between">
							<span>Total:</span>
							<span className="font-bold">${cartItems?.reduce((price, item) => price + item.price * item.quantity, 0)}</span>
						</div>
					</div>
					<button className="bg-blue-400 text-white px-4 py-2 rounded-lg mt-4 w-full">Proceed to Checkout</button>
				</div>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
					{saveItems && saveItems.length > 0 && saveItems.map((item) => <Cart key={item.id} item={item} />)}
				</div>
				<div className="flex flex-col justify-center items-center bg-gray-100 p-4 mt-4 rounded-lg shadow-lg">
					<h2 className="text-xl font-bold mb-4">Saved Items</h2>
					<div className="flex flex-col space-y-2 w-full">
						<div className="flex justify-between">
							<span>Total Price:</span>
							<span className="font-bold">${saveItems?.reduce((price, item) => price + item.price * item.quantity, 0)}</span>
						</div>
						<div className="flex justify-between">
							<span>Delivery Charges:</span>
							<span className="font-bold line-through">$5</span>
						</div>
						<hr className="my-2 w-full border-t border-gray-300" />
						<div className="flex justify-between">
							<span>Total:</span>
							<span className="font-bold">${saveItems?.reduce((price, item) => price + item.price * item.quantity, 0)}</span>
						</div>
					</div>
				</div>
			</section>
		</main>
	);
}

export default UserCartProducts;
