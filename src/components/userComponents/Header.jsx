// Header.js
import React from 'react';
import { FaHeart } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { Link, NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux';

const Header = () => {
  const items = useSelector((state) => state.cart)
  const wishlist = useSelector((state) => state.wishList)
  return (
    <header className="bg-gray-800 text-white py-4">
      <div className="container mx-auto flex justify-between items-center px-20">
        <Link to="/search" className="hover:text-gray-300 text-xl font-semibold">
          E-commerece Redux Store
        </Link>
        <nav>

          <ul className="flex gap-10 text-2xl">
            <Link to="/login" className="hover:text-gray-300 text-xl font-semibold">
              Login
            </Link>
            <Link to="/register" className="hover:text-gray-300 text-xl font-semibold">
              Register
            </Link>
            <li>
              <Link to="/wishlist" className="hover:text-gray-300 flex  gap-2">
                <FaHeart />
                <h1>{wishlist.length}</h1>
              </Link>
            </li>
            <li>
              <NavLink to="/cart" className="hover:text-gray-300 flex  gap-2">
                <FaCartShopping />
                <h1>{items.length}</h1>
              </NavLink>
            </li>
            <li>
              <Link to="/search" className="hover:text-gray-300">
                <FaSearch />
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
