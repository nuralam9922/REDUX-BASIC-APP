import { createSlice } from '@reduxjs/toolkit';

const initialState = [];
const saveForLetterSlice = createSlice({
	name: 'saveForeLetter',
	initialState,
	reducers: {
		addSaveForLetter: (state, action) => {
			const findIndex = state.findIndex((item) => item.id === action.payload.id);
			if (action.payload) {
				if (findIndex === -1) {
					state.push(action.payload);
				} else {
					state.splice(findIndex, 1); // Remove the item at index findIndex
				}
			}
		},
	},
});

export const { addSaveForLetter } = saveForLetterSlice.actions;

export default saveForLetterSlice.reducer;
