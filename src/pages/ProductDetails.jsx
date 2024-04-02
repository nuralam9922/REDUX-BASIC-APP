import React, { useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { cartProducts, decreaseQuantity, increaseQuantity } from '../store/CartSlice';
import { addSaveForLetter } from '../store/saveForLetterSlice';

function ProductDetails() {
	const { ProductId } = useParams();
	const dispatch = useDispatch();
	const saveItems = useSelector((state) => state.saveForLetterSlice);
	const [selectedColor, setSelectedColor] = useState('red');
	const [selectedSize, setSelectedSize] = useState('s');
	const [productData, setProductData] = useState([]);
	const [mainImageUrl, setMainImageUrl] = useState();
	const [overlayImageShow, setOverlayImageShow] = useState(false);

	const fetchProductData = async () => {
		try {
			console.log('Fetching product data...');
			const response = await fetch(`https://api.escuelajs.co/api/v1/products/${ProductId}`);
			if (!response.ok) {
				throw new Error('Failed to fetch product data');
			}
			const data = await response.json();
			console.log('Product data:', data);
			setProductData(data);
		} catch (error) {
			console.error('Error fetching product data:', error.message);
		}
	};

	useEffect(() => {
		fetchProductData();
	}, [ProductId]);

	const { isLoading } = useQuery({ queryKey: ['ProductId'], queryFn: fetchProductData });

	const handleColorChange = (color) => {
		setSelectedColor(color);
	};

	const handleSizeChange = (size) => {
		setSelectedSize(size);
	};

	if (isLoading) {
		return (
			<div className={`relative flex lg:gap-10 w-full flex-col lg:flex-row `}>
				<section className={`rightSection w-full lg:w-1/2`}>
					<div className="images flex flex-col-reverse md:flex-row gap-3 md:h-[30em]">
						<div className="leftSideDropdownImages flex-row-reverse lg:flex-col h-full flex gap-4">
							{[...Array(4)].map((_, i) => (
								<div key={i} className="bg-gray-200 h-24 md:flex-grow size-24 cursor-pointer rounded-md overflow-hidden"></div>
							))}
						</div>
						<div className="bg-gray-200 w-screen h-96 md:h-full cursor-pointer rounded-md ">a</div>
					</div>
				</section>
				<section className="leftSection md:w-1/2">
					<h1 className="font-bold text-2xl w-full md:text-3xl mt-5 md:mt-0 text-gray-200">Product Title</h1>
					<h1 className="font-bold text-3xl mt-5 text-gray-200">$</h1>
					<p className="mt-5 text-gray-200">⭐⭐⭐⭐⭐</p>
					<h1 className="mt-5 font-extrabold text-balance text-gray-200">Colors</h1>
					<div className="flex mt-2 flex-wrap gap-2">
						{[...Array(4)].map((_, i) => (
							<button
								key={i}
								className="border-[2px] w-32 h-10 text-xs rounded-md flex gap-3 items-center justify-center border-gray-300 bg-gray-200"
							></button>
						))}
					</div>
					<h1 className="mt-5 font-extrabold text-balance text-gray-200">Sizes</h1>
					<div className="flex mt-2 flex-wrap gap-2 justify-between md:justify-normal">
						{[...Array(4)].map((_, i) => (
							<label key={i} className="border-[2px] w-32 h-10 rounded-md flex gap-3 items-center justify-center border-gray-300 bg-gray-200">
								<input type="radio" />
							</label>
						))}
					</div>
					<h1 className="mt-5 font-extrabold text-balance text-gray-200">Quantity</h1>
					<div className="ml-auto flex items-center gap-3 mt-5">
						<button
							type="button"
							className="bg-blue-400 text-white size-10 flex items-center justify-center rounded-md shadow-md hover:shadow-xl transition duration-300"
						>
							+
						</button>
						<span className="text-2xl border-[2px] size-10 px-6 flex items-center justify-center border-gray-300 font-bold text-gray-200">
							10
						</span>
						<button
							type="button"
							className="bg-blue-400 text-white size-10 flex items-center justify-center rounded-md shadow-md hover:shadow-xl transition duration-300"
						>
							-
						</button>
					</div>
					<div className="flex w-full gap-4 md:gap-10 items-center justify-evenly mt-5">
						<button type="button" className="bg-blue-500 flex-grow py-2 text-white rounded-md hover:bg-blue-600 transition duration-300">
							Add to Cart
						</button>
						<button type="button" className="bg-green-500 flex-grow py-2 text-white rounded-md hover:bg-green-600 transition duration-300">
							Buy Now
						</button>
						<button
							type="button"
							className="text-gray-500 size-7 border border-gray-300 rounded-md p-2 hover:bg-gray-100 transition duration-300"
						>
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-gray-200">
								<path d="M5 2H19C19.5523 2 20 2.44772 20 3V22.1433C20 22.4194 19.7761 22.6434 19.5 22.6434C19.4061 22.6434 19.314 22.6168 19.2344 22.5669L12 18.0313L4.76559 22.5669C4.53163 22.7136 4.22306 22.6429 4.07637 22.4089C4.02647 22.3293 4 22.2373 4 22.1433V3C4 2.44772 4.44772 2 5 2Z"></path>
							</svg>
						</button>
					</div>
				</section>
			</div>
		);
	}

	return (
		<main className="relative">
			<div className={`relative flex lg:gap-10 w-full flex-col lg:flex-row `}>
				<section className={`rightSection w-full lg:w-1/2`}>
					<div className="images flex flex-col-reverse md:flex-row gap-3 md:h-[30em]">
						<div className="leftSideDropdownImages flex-row lg:flex-col h-full flex  gap-4">
							{productData &&
								productData?.images?.map((imageUrl, i) => (
									<div key={i} className="bg-slate-200 h-24 md:flex-grow size-24	 cursor-pointer rounded-md overflow-hidden">
										<img
											className="w-full h-full object-cover"
											src={imageUrl}
											alt={productData.name}
											onError={(e) => (e.target.src = 'https://via.placeholder.com/100')}
											onClick={() => setMainImageUrl(imageUrl)}
										/>
									</div>
								))}
						</div>

						<div
							onClick={() => setOverlayImageShow(true)}
							// onMouseMove={handleMouseMove}
							className="bg-slate-200 w-full  h-full cursor-pointer rounded-md overflow-hidden"
						>
							<img className="w-full h-full object-cover" src={mainImageUrl || productData?.images?.[0]} alt="" />
						</div>
					</div>
				</section>


				<section className="leftSection  md:w-1/2">
					<h1 className="font-bold text-2xl  w-full md:text-3xl mt-5 md:mt-0">{productData?.title} </h1>
					<h1 className="font-bold text-3xl mt-5">${productData?.price} </h1>
					<p className="mt-5">⭐⭐⭐⭐⭐</p>

					<h1 className="mt-5 font-extrabold text-balance">Colors</h1>
					<div className="flex mt-2 flex-wrap gap-2 ">
						{['red', 'green', 'yellow', 'blue'].map((color) => {
							return (
								<button
									key={color}
									className={`border-[2px] w-32 h-10 text-xs rounded-md flex gap-3 items-center justify-center ${
										selectedColor === color ? `border-${color}-600` : `border-gray-300`
									}`}
									type="button"
									onClick={() => {
										console.log(`border-${color}-600`);
										handleColorChange(color);
									}}
								>
									<span
										className={`inline-block size-5 rounded-full ${
											selectedColor === color ? `bg-${color}-600` : `border-[2px] border-${color.toLowerCase()}-400`
										}`}
									></span>
									{color}
								</button>
							);
						})}
					</div>
					<h1 className="mt-5 font-extrabold text-balance">Sizes</h1>
					<div className="flex mt-2 flex-wrap gap-2 justify-between md:justify-normal">
						{['S', 'M', 'L', 'XL'].map((size) => (
							<label
								key={size}
								className={`border-[2px] w-32 h-10 rounded-md flex gap-3 items-center justify-center ${
									selectedSize === size.toLowerCase() ? `border-${selectedColor}-400` : 'border-gray-300'
								}`}
							>
								<input
									type="radio"
									value={size.toLowerCase()}
									checked={selectedSize === size.toLowerCase()}
									onChange={() => setSelectedSize(size.toLowerCase())}
									name="size"
								/>
								{size}
							</label>
						))}
					</div>

					<h1 className="mt-5 font-extrabold text-balance">Quantity</h1>
					<div className="ml-auto flex items-center gap-3 mt-5">
						<button
							// onClick={() => item.quantity < 10 && dispatch(increaseQuantity(productData.id))}
							type="button"
							className="bg-blue-400 text-white size-10 flex items-center justify-center rounded-md shadow-md hover:shadow-xl transition duration-300"
						>
							+
						</button>
						<span className="text-2xl border-[2px] size-10 px-6 flex items-center justify-center border-gray-300 font-bold">10</span>
						<button
							// onClick={() => item.quantity > 1 && dispatch(decreaseQuantity(productData.id))}
							type="button"
							className="bg-blue-400 text-white size-10 flex items-center justify-center rounded-md shadow-md hover:shadow-xl transition duration-300"
						>
							-
						</button>{' '}
					</div>

					{/* buttons section */}
					<div
						onClick={() => dispatch(cartProducts({ ...productData, quantity: 1 }))}
						className="flex w-full gap-4 md:gap-10 items-center justify-evenly mt-5"
					>
						<button type="button" className="bg-blue-500 flex-grow py-2 text-white rounded-md hover:bg-blue-600 transition duration-300">
							Add to Cart
						</button>
						<button type="button" className="bg-green-500 flex-grow py-2 text-white rounded-md hover:bg-green-600 transition duration-300">
							Buy Now
						</button>
						<button
							onClick={() => dispatch(addSaveForLetter(productData))}
							type="button"
							className="text-gray-500 size-10 border border-gray-300 rounded-md p-2 hover:bg-gray-100 transition duration-300"
						>
							{saveItems?.find((saveItem) => saveItem.id === productData.id) ? (
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
									<path d="M5 2H19C19.5523 2 20 2.44772 20 3V22.1433C20 22.4194 19.7761 22.6434 19.5 22.6434C19.4061 22.6434 19.314 22.6168 19.2344 22.5669L12 18.0313L4.76559 22.5669C4.53163 22.7136 4.22306 22.6429 4.07637 22.4089C4.02647 22.3293 4 22.2373 4 22.1433V3C4 2.44772 4.44772 2 5 2Z"></path>
								</svg>
							) : (
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
									<path d="M5 2H19C19.5523 2 20 2.44772 20 3V22.1433C20 22.4194 19.7761 22.6434 19.5 22.6434C19.4061 22.6434 19.314 22.6168 19.2344 22.5669L12 18.0313L4.76559 22.5669C4.53163 22.7136 4.22306 22.6429 4.07637 22.4089C4.02647 22.3293 4 22.2373 4 22.1433V3C4 2.44772 4.44772 2 5 2ZM18 4H6V19.4324L12 15.6707L18 19.4324V4Z"></path>
								</svg>
							)}
						</button>
					</div>
				</section>
			</div>
			<section className="leftSection md:w-1/2 mt-10">
				<h2 className="text-3xl font-bold mb-4">Product description</h2>
				<p className="mt-5 text-justify">{productData?.description}</p>
			</section>
			<section className="reviews mt-10">
				<h2 className="text-3xl font-bold mb-4">Customer Reviews</h2>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
					{/* Review Card 1 */}
					<div className="bg-white rounded-lg shadow-md p-6">
						<h3 className="text-xl font-semibold mb-2">Great Product!</h3>
						<p className="text-gray-600 mb-4">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
						</p>
						<p className="text-gray-500">- John Doe</p>
					</div>

					{/* Review Card 2 */}
					<div className="bg-white rounded-lg shadow-md p-6">
						<h3 className="text-xl font-semibold mb-2">Excellent Quality</h3>
						<p className="text-gray-600 mb-4">
							Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
						</p>
						<p className="text-gray-500">- Jane Smith</p>
					</div>

					{/* Review Card 3 */}
					<div className="bg-white rounded-lg shadow-md p-6">
						<h3 className="text-xl font-semibold mb-2">Highly Recommended</h3>
						<p className="text-gray-600 mb-4">
							Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
						</p>
						<p className="text-gray-500">- Michael Johnson</p>
					</div>
				</div>
			</section>

			{/* image showing overlay */}
			{overlayImageShow && (
				<div className="absolute z-[999] bg-white top-0 w-full h-full">
					<button onClick={() => setOverlayImageShow(false)} type="button" className="p-2 bg-gray-400 px-10 text-white rounded-md">
						Close X
					</button>
				</div>
			)}
		</main>
	);
}

export default ProductDetails;
