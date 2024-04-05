import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name: 'wishList',
    initialState: [],
    reducers: {
        addtoWishList: (state, action) => {
            const { Id, img, Title, price } = action.payload;
            const existingItem = state.find(item => item.Id === Id);
            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                state.push({ Id, img, Title, price, quantity: 1 });
            }
        },
        removeFromWishlist: (state, action) => {
            const itemId = action.payload;
            return state.filter(item => item.Id !== itemId);
        },
    }
});

export const { addtoWishList, removeFromWishlist } = cartSlice.actions;
export default cartSlice.reducer;
