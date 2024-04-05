import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name: 'cart',
    initialState: [],
    reducers: {
        add: (state, action) => {
            const { Id, img, Title, price } = action.payload;
            const existingItem = state.find(item => item.Id === Id);
            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                state.push({ Id, img, Title, price, quantity: 1 });
            }
        },
        remove: (state, action) => {
            const itemId = action.payload;
            return state.filter(item => item.Id !== itemId);
        },
        increase: (state, action) => {
            const itemId = action.payload;
            const selectedItem = state.find(item => item.Id === itemId);
            if (selectedItem) {
                selectedItem.quantity += 1;
            }
        },
        decrease: (state, action) => {
            const itemId = action.payload;
            const selectedItem = state.find(item => item.Id === itemId);
            if (selectedItem && selectedItem.quantity > 1) {
                selectedItem.quantity -= 1;
            }
        }
    }
});

export const { add, remove, increase, decrease } = cartSlice.actions;
export default cartSlice.reducer;
