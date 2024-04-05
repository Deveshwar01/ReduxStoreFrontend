import React from 'react';
import { NavLink } from 'react-router-dom'


const AdminHeader = () => {
    return (
        <header className="bg-gray-800 text-white py-4">
            <div className="container mx-auto flex justify-between items-center px-20">
                <h1 className="text-xl font-semibold">ADMIN PANNEL</h1>
                <div className='flex gap-10'>
                    <NavLink to="/admin/addproduct" className="hover:text-gray-300">Add Product</NavLink>
                    <NavLink to="/admin/allproduct" className="hover:text-gray-300">All product</NavLink>
                    <NavLink to="/admin/orders" className="hover:text-gray-300">All orders</NavLink>
                </div>
            </div>
        </header>
    )
}

export default AdminHeader