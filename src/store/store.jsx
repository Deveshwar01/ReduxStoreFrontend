import { configureStore } from '@reduxjs/toolkit';
import productReducer from "./adminSlice/productSlice";
import showProductReducer from './adminSlice/showProductSlice';
import userProductReducer from './userSlice/userProductSlice';
import cartReducer from './userSlice/cartSlice';
import authReducer from './userSlice/authSlice'
import wishListReducer from './userSlice/wishListSlice';
import GetcategoriesReducer from './userSlice/GetcategoriesReducer';

const store = configureStore({
    reducer: {
        // user 
        cart: cartReducer,
        userProducts: userProductReducer,
        wishList: wishListReducer,
        user: authReducer,
        // admin
        addProduct: productReducer,
        pro: showProductReducer,
        getCategory: GetcategoriesReducer

    },
});

export default store;
