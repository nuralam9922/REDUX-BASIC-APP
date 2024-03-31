import React, { useState } from 'react';
import CartSkeleton from '../components/CartSkeleton';
import { useEffect } from 'react';

function ProductDetails() {
	useEffect(() => {
		window.scrollTo({
			top: 0,
			// behavior: 'smooth', // for smooth scrolling, or 'auto' for instant scrolling
		});
	}, []);
	const [selectedColor, setSelectedColor] = useState('red');
	const [selectedSize, setSelectedSize] = useState('s');
	const handleColorChange = (color) => {
		setSelectedColor(color);
	};
	const handleSizeChange = (size) => {
		handleSizeChange(size);
	};

	return (
		<main className="relative">
			<div className={`relative flex lg:gap-10 w-full flex-col lg:flex-row `}>
				<section className={` rightSection  w-full lg:w-1/2`}>
					<div className="images flex flex-col-reverse md:flex-row gap-3 md:h-[30em]">
						<div className="leftSideDropdownImages flex-row lg:flex-col h-full flex  gap-4">
							<div className="bg-slate-200 h-24 md:flex-grow size-24	 cursor-pointer rounded-md overflow-hidden">
								<img className="w-full h-full object-cover" src="https://via.placeholder.com/100" alt="" />
							</div>
							<div className="bg-slate-200 h-24 md:flex-grow size-24	 cursor-pointer rounded-md overflow-hidden">
								<img className="w-full h-full object-cover" src="https://via.placeholder.com/100" alt="" />
							</div>
							<div className="bg-slate-200 h-24 md:flex-grow  size-24	cursor-pointer rounded-md overflow-hidden">
								<img className="w-full h-full object-cover" src="https://via.placeholder.com/100" alt="" />
							</div>
							<div className="bg-slate-200  h-24fmd:lex-grow  size-24	cursor-pointer rounded-md overflow-hidden">
								<img className="w-full h-full object-cover" src="https://via.placeholder.com/100" alt="" />
							</div>
						</div>

						<div className="bg-slate-200 w-full  h-full cursor-pointer rounded-md overflow-hidden">
							<img className="w-full h-full object-cover" src="https://via.placeholder.com/100" alt="" />
						</div>
					</div>
				</section>
				<section className="leftSection  md:w-1/2">
					<h1 className="font-bold text-2xl  w-full md:text-3xl mt-5">This is Product name </h1>
					<h1 className="font-bold text-3xl mt-5">$110 </h1>
					<p className="mt-5">⭐⭐⭐⭐⭐</p>

					<h1 className="mt-5 font-extrabold text-balance">Colors</h1>
					<div className="flex mt-2 flex-wrap gap-2 justify-between">
						<button
							className={`border-[2px] w-40 h-11 rounded-md flex gap-3 items-center justify-center ${
								selectedColor === 'red' ? 'border-red-600' : 'border-gray-300'
							}`}
							type="button"
							onClick={() => handleColorChange('red')}
						>
							<span
								className={`inline-block size-5 rounded-full ${selectedColor === 'red' ? 'bg-red-600' : 'border-[2px] border-red-400'}`}
							></span>
							Red
						</button>
						<button
							className={`border-[2px] w-40 h-11 rounded-md flex gap-3 items-center justify-center ${
								selectedColor === 'green' ? 'border-green-600' : 'border-gray-300'
							}`}
							type="button"
							onClick={() => handleColorChange('green')}
						>
							<span
								className={`inline-block size-5 rounded-full ${selectedColor === 'green' ? 'bg-green-600' : 'border-[2px] border-green-400'}`}
							></span>
							Green
						</button>
						<button
							className={`border-[2px] w-40 h-11 rounded-md flex gap-3 items-center justify-center ${
								selectedColor === 'yellow' ? 'border-yellow-600' : 'border-gray-300'
							}`}
							type="button"
							onClick={() => handleColorChange('yellow')}
						>
							<span
								className={`inline-block size-5 rounded-full ${
									selectedColor === 'yellow' ? 'bg-yellow-600' : 'border-[2px] border-yellow-400'
								}`}
							></span>
							Yellow
						</button>
						<button
							className={`border-[2px] w-40 h-11 rounded-md flex gap-3 items-center justify-center ${
								selectedColor === 'blue' ? 'border-blue-600' : 'border-gray-300'
							}`}
							type="button"
							onClick={() => handleColorChange('blue')}
						>
							<span
								className={`inline-block size-5 rounded-full ${selectedColor === 'blue' ? 'bg-blue-600' : 'border-[2px] border-blue-400'}`}
							></span>
							Blue
						</button>
					</div>

					<h1 className="mt-5 font-extrabold text-balance">Sizes</h1>
					<div className="flex mt-2  flex-wrap gap-2 justify-between md:justify-normal">
						<label
							className={`border-[2px] p-2 px-10  rounded-md flex gap-3 items-center justify-center ${
								selectedSize === 's' ? `border-${selectedColor}-400` : 'border-gray-300'
							}`}
						>
							<input type="radio" value="s" checked={selectedSize === 's'} onChange={() => setSelectedSize('s')} name="size" />S
						</label>
						<label
							className={`border-[2px] p-2 px-10  rounded-md flex gap-3 items-center justify-center ${
								selectedSize === 'm' ? `border-${selectedColor}-400` : 'border-gray-300'
							}`}
						>
							<input type="radio" value="m" checked={selectedSize === 'm'} onChange={() => setSelectedSize('m')} name="size" />M
						</label>
						<label
							className={`border-[2px] p-2 px-10  rounded-md flex gap-3 items-center justify-center ${
								selectedSize === 'l' ? `border-${selectedColor}-400` : 'border-gray-300'
							}`}
						>
							<input type="radio" value="l" checked={selectedSize === 'l'} onChange={() => setSelectedSize('l')} name="size" />L
						</label>
						<label
							className={`border-[2px] p-2 px-10  rounded-md flex gap-3 items-center justify-center ${
								selectedSize === 'xl' ? `border-${selectedColor}-400` : 'border-gray-300'
							}`}
						>
							<input type="radio" value="xl" checked={selectedSize === 'xl'} onChange={() => setSelectedSize('xl')} name="size" />
							XL
						</label>
					</div>

					<h1 className="mt-5 font-extrabold text-balance">Quantity</h1>
					<div className="ml-auto flex items-center gap-3 mt-5">
						<button
							// onClick={() => item.quantity < 10 && dispatch(increaseQuantity(item.id))}
							type="button"
							className="bg-blue-400 text-white size-10 flex items-center justify-center rounded-md shadow-md hover:shadow-xl transition duration-300"
						>
							+
						</button>
						<span className="text-2xl border-[2px] size-10 px-6 flex items-center justify-center border-gray-300 font-bold">10</span>
						<button
							// onClick={() => item.quantity > 1 && dispatch(decreaseQuantity(item.id))}
							type="button"
							className="bg-blue-400 text-white size-10 flex items-center justify-center rounded-md shadow-md hover:shadow-xl transition duration-300"
						>
							-
						</button>{' '}
					</div>

					{/* buttons section */}
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
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
								<path d="M5 2H19C19.5523 2 20 2.44772 20 3V22.1433C20 22.4194 19.7761 22.6434 19.5 22.6434C19.4061 22.6434 19.314 22.6168 19.2344 22.5669L12 18.0313L4.76559 22.5669C4.53163 22.7136 4.22306 22.6429 4.07637 22.4089C4.02647 22.3293 4 22.2373 4 22.1433V3C4 2.44772 4.44772 2 5 2Z"></path>
							</svg>
						</button>
					</div>
				</section>
			</div>
			<section className="leftSection w-1/2 mt-10">
				<h2 className="text-3xl font-bold mb-4">Product description</h2>
				<p className="mt-5 text-justify">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit aliquid ipsa in id beatae deserunt suscipit optio ducimus cupiditate
					sapiente, totam dicta nemo perferendis magni molestias ea alias tempora? Est! Lorem ipsum, dolor sit amet consectetur adipisicing elit.
					Rem voluptatibus velit ut sint ipsam, cum provident maiores alias officiis obcaecati, assumenda voluptatum quam harum distinctio dolor
					voluptates aut fugiat repudiandae excepturi nobis minima ratione nesciunt. Dolorum consequatur dignissimos et neque?
				</p>
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

			<section className="">
				{Array(10)
					.fill()
					.map((_, i) => (
						<CartSkeleton key={i} />
					))}
			</section>
		</main>
	);
}

export default ProductDetails;
