import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { add } from "../../store/userSlice/cartSlice"
import { addtoWishList } from '../../store/userSlice/wishListSlice';
import { fetchProducts, STATUSES } from '../../store/userSlice/userProductSlice';
import { FaHeart } from "react-icons/fa";

const Product = () => {
  const [searchQuery, setSearchQuery] = useState(''); // State variable to hold the search query
  const products = useSelector((state) => state.userProducts.data);
  const status = useSelector((state) => state.userProducts.status);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const handleAdd = (product) => {
    dispatch(add(product))
  }

  const handleWishList = (product) => {
    dispatch(addtoWishList(product))
  }

  const filteredProducts = products.filter(product =>
    product.Title.toLowerCase().includes(searchQuery.toLowerCase()) || // Filter based on product title
    product.price.toString().includes(searchQuery) // Filter based on product price
  );

  if (status === STATUSES.LOADING) {
    return <h2>Loading</h2>;
  }
  if (status === STATUSES.ERROR) {
    return <h2>Something went wrong</h2>;
  }

  return (
    <div className='p-10'>
      <input
        type="text"
        placeholder=" Enter Input to Search Products"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)} // Update search query state
        className=' border w-[300px]'
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-10 py-10">
        {filteredProducts.map(product => (
          <div key={product.Id} className="bg-white shadow-md rounded-md p-4 flex gap-5 ">
            <img src={product.img} className="w-36 h-36 object-contain mb-4" />
            <div className='mt-10'>
              <p className='text truncate'>{product.Title}</p>
              <p className="text-gray-700 mb-2">Price: ${product.price}</p>
              <div className='flex gap-1'>
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                  onClick={() => handleAdd(product)}>
                  Add to Cart
                </button>
                <button className='border border-black-100 font-bold text-2xl rounded '
                  onClick={() => handleWishList(product)}>
                  <FaHeart />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;
