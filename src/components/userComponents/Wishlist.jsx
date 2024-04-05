import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromWishlist } from '../../store/userSlice/wishListSlice';

const Wishlist = () => {
  const dispatch = useDispatch();
  const wishlist = useSelector((state) => state.wishList);

  const handleRemove = (productId) => {
    dispatch(removeFromWishlist(productId));
  };

  return (
    <div className="wishlist-wrapper p-10">
      {wishlist.length === 0 ? (
        <div className="flex flex-col items-center">
          <p className="text-lg font-semibold mb-4">Your wishlist is empty.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {wishlist.map((product) => (
            <div key={product.Id} className="wishlist-item bg-white rounded-lg shadow-md overflow-hidden">
              <img className="h-64 w-full object-cover" src={product.img} alt={product.title} />
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">{product.Title}</h3>
                <p className="text-gray-700 mb-2">${product.price.toFixed(2)}</p>
                <button
                  onClick={() => handleRemove(product.Id)}
                  className="btn bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Wishlist;
