import { configureStore } from '@reduxjs/toolkit';

import cartSlice from './CartSlice';
import apiSlice from './apiSlice';
import saveForLetterSlice from './saveForLetterSlice';

export const store = configureStore({
	reducer: {
		cartSlice,
		saveForLetterSlice,
		apiSlice,
	},
});
