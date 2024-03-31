import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

export const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		cartProducts: (state, action) => {
			const newItem = action.payload;
			const index = state.findIndex((item) => item.id === newItem.id);
			if (index === -1) {
				state.push(newItem);
			} else {
				state[index].quantity += 1;
			}
		},
		increaseQuantity: (state, action) => {
			state.filter((item) => item.id === action.payload && item.quantity++);
		},
		decreaseQuantity: (state, action) => {
			state.filter((item) => item.id === action.payload && item.quantity--);
		},
		deleteItem: (state, action) => {
			const index = state.findIndex((item) => item.id === action.payload);
			if (index !== -1) {
				state.splice(index, 1);
			}
		},
	},
});

export const { cartProducts, increaseQuantity, decreaseQuantity, deleteItem } = cartSlice.actions;

export default cartSlice.reducer;
