import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom"
// User Imports
import HomePage from './Pages/userPages/HomePage.jsx'
import Search from "./components/userComponents/Search.jsx"
import Wishlist from './components/userComponents/Wishlist.jsx'
import Cart from './components/userComponents/Cart.jsx'
import Header from './components/userComponents/Header.jsx'
import Product from './components/userComponents/Product.jsx'
import Login from './Pages/userPages/Login/Login.jsx'
import Register from './Pages/userPages/Register/Register.jsx'
// Admin Imports
import AdminHomePage from './Pages/adminPages/AdminHome.jsx'
import AddProduct from "./components/adminComponents/AddProduct.jsx"
import ShowProduct from "./components/adminComponents/ShowProduct.jsx"



const App = () => {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path='/' element={<HomePage />}></Route>
                <Route path='wishlist' element={<Wishlist />} />
                <Route path='/cart' element={<Cart />} />
                <Route path='search' element={<Search />} />
                <Route path='products' element={<Product />} />
                <Route path="/login" element={<Login />}></Route>
                <Route path="/register" element={<Register />}></Route>

                <Route path="/admin" element={<AdminHomePage />}>
                    <Route path='addproduct' element={<AddProduct />} />
                    <Route path='allproduct' element={<ShowProduct />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App;
