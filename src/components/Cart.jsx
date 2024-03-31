import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { cartProducts } from '../store/CartSlice'; // Make sure this import is correct
import { addSaveForLetter } from '../store/saveForLetterSlice';
function Cart({ item }) {
	const dispatch = useDispatch();
	const saveItems = useSelector((state) => state.saveForLetterSlice);
	const handleAddProduct = () => {
		dispatch(cartProducts({ ...item, quantity: 1 })); // Using cartProducts action creator to dispatch
	};

	return (
		<article className="min-w-60 shadow-xl px-2 py-2 border rounded-xl">
			<figure className="w-full h-52 rounded-xl overflow-hidden">
				<div className="bg-gray-300 w-full h-full relative group">
					<Link to={`product/${item?.id}`}>
						<img
							onError={(e) =>
								(e.target.src =
									'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMwAAADACAMAAAB/Pny7AAAAVFBMVEXv8fNod4dicoL4+fuHkp+qsrr9/f5XaHqttb7FytB8iZbBx81TZnjn6e319vheb4B1g5HL0NWhqrNtfIvZ3eHT19yao62NmKO3vsbg4uaUnqlHXHCmgbe/AAADBElEQVR4nO3c65aaMBiFYUgQEDUhYBSn93+fxbbjEIiHjFE20/38bcfFuzh8RNEkISIiIiIiIiIiIiIiIiIiIiIiIiIiovuUjG+ultyUq8jKzUwtMhNpfPVpjpY8K17Qkgo9Q4s0+hUtaVqU7z9vZPeKg6wnsvz9MeVrWlJRMYYx0xhdxIEQo5t1FJ0GiCk2KsoL7rYQMXFekDGRMOYWxkTyf8QoqfoVaPjlGjBGJqZsDk23D76Px4vJ11mbCiHa+rALzIGLyUvxb5UjRB24c9Bi8tVg9dnXBJ04YDHSOItPnQW9IFhMUo1W0l3IrsGKUaZ2W/RHyAtixUzWniILOWuwYlQzOspEbX5OTLrgGDnZM5UdxZzvdK71gcVs2vE5c3K2XO4OVfVx7TzCiklOtbtrdOO27MVZuvbXgMXk7nEmaucok/u/byaJwl8DFjOamqIcbrSyl3/z16DFqMGBJlLnIFOm/Qrd+mrQYhJ5Oqb6fGJoXXdquMXGOZ98+wYuJlHJ5pBVVXVcWWcB4Lb0C4TpO4d4Meeck7X7k3KPsXo8gtJJDWJMv+lKuRs6bek3uR3fUmPGTP6nbT0fsol2tG8WESOt8H5gOD7SlhDzOSs9NWI9vEgsIEbZGx+wO/MGP0aZ6ymjGvgYZ+77DKYnfIznmjyiLzXoMfdbBtc07Jh+Vj7wRMpl3kDH+Ob+rRrkGP/cv1EDHCOtfvhBoX4lLZFjrs99b835mgYbo2zgw2hbI1Fj+rkf+jDa1iSgMffmvk+xwXh2ZtLy2DV55PNvsGK+1/IVBRTz6KxcQszd++QFxUgbfB2DjQmbldgx0m6fbkGJUVEeQseI+cbcx4159pqMFLOO04IQ8/SsBIqJ1zJ/jHx67uPEXHtvfIkxch9hVoLEmBhzHyRGNzFTZv/+zE+KiYwxjPmpMSbenHToZoZvnst4dzCOX7v3tyTJTv955icuXZh5fhJAdccssuMq9PsQ0cg89u805LP9UgMRERERERERERERERERERERERERERHN5zedIj3E0w87JAAAAABJRU5ErkJggg==')
							}
							src={item.images[0]}
							className="w-full h-full object-cover"
							alt={item.title}
						/>
					</Link>
					{/* overlay  */}
					<div
						onClick={() => dispatch(addSaveForLetter(item))}
						className="absolute z-[10] top-3 -right-10 group-hover:right-3 duration-100 cursor-pointer size-6 text-white"
					>
						{saveItems?.find((saveItem) => saveItem.id === item.id) ? (
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
								<path d="M5 2H19C19.5523 2 20 2.44772 20 3V22.1433C20 22.4194 19.7761 22.6434 19.5 22.6434C19.4061 22.6434 19.314 22.6168 19.2344 22.5669L12 18.0313L4.76559 22.5669C4.53163 22.7136 4.22306 22.6429 4.07637 22.4089C4.02647 22.3293 4 22.2373 4 22.1433V3C4 2.44772 4.44772 2 5 2Z"></path>
							</svg>
						) : (
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
								<path d="M5 2H19C19.5523 2 20 2.44772 20 3V22.1433C20 22.4194 19.7761 22.6434 19.5 22.6434C19.4061 22.6434 19.314 22.6168 19.2344 22.5669L12 18.0313L4.76559 22.5669C4.53163 22.7136 4.22306 22.6429 4.07637 22.4089C4.02647 22.3293 4 22.2373 4 22.1433V3C4 2.44772 4.44772 2 5 2ZM18 4H6V19.4324L12 15.6707L18 19.4324V4Z"></path>
							</svg>
						)}
					</div>
				</div>
			</figure>
			<Link to={`product/${item?.id}`}>
				<div className="mt-3">
					<h4 className="font-bold h-14">{item.title}</h4>
					<p className="text-sm text-gray-600 mt-1 h-14">{item.description.split(' ').slice(0, 10).join(' ')}...</p>
				</div>
			</Link>
			<p className="font-bold mt-2">$ {item.price}</p>
			<button onClick={handleAddProduct} type="button" className="bg-blue-400 p-3 mt-3 px-10 text-white rounded-lg block w-full">
				add to cart
			</button>
		</article>
	);
}

export default Cart;
