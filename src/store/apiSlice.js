import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

// Define fetchProducts async thunk before createSlice
export const fetchProducts = createAsyncThunk('apiSlice/fetchProducts', async () => {
	try {
		const response = await fetch('https://api.escuelajs.co/api/v1/products');
		const data = await response.json(); // Parse response body as JSON
		return data;
	} catch (error) {
		throw error;
	}
});

const initialState = {
	products: [],
	status: 'idle',
	error: null,
};

const apiSlice = createSlice({
	name: 'apiSlice',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(fetchProducts.pending, (state) => {
				state.status = 'loading';
			})
			.addCase(fetchProducts.fulfilled, (state, action) => {
				state.status = 'succeeded';
				state.products = action.payload; // Update state with fetched data
			})
			.addCase(fetchProducts.rejected, (state, action) => {
				state.status = 'failed';
				state.error = action.error.message;
			});
	},
});

export default apiSlice.reducer;
