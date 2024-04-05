import React, { useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { remove, increase, decrease } from '../../store/userSlice/cartSlice';

const Cart = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.cart);

  // Calculate total price using useMemo hook
  const totalPrice = useMemo(() => {
    return products.reduce((acc, product) => acc + product.price * product.quantity, 0);
  }, [products]);


  const handleRemove = (productId) => {
    dispatch(remove(productId));
  };

  const inc = (id) => {
    dispatch(increase(id));
  };

  const dec = (id) => {
    dispatch(decrease(id));
  };

  return (
    <div className="cartWrapper p-10">
      {products.length === 0 ? (
        <div className="flex flex-col items-center">
          <p className="text-lg font-semibold mb-4">Your cart is empty.</p>
          <button className="btn" onClick={() => window.location.href = '/'}>Add Products</button>
        </div>
      ) : (
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Product
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Price
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Quantity
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Total
              </th>
              <th scope="col" className="relative px-6 py-3">
                <span className="sr-only">Remove</span>
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {products.map((product) => (
              <tr key={product.Id}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 h-20 w-20">
                      <img className="h-20 w-20 rounded-lg" src={product.img} alt={product.title} />
                    </div>
                    <div className="ml-4">
                      <div className="text-lg font-semibold">{product.title}</div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-lg text-gray-700">${product.price.toFixed(2)}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <button onClick={() => dec(product.Id)} className="text-2xl">-</button>
                    <span className="mx-2">{product.quantity}</span>
                    <button onClick={() => inc(product.Id)} className="text-2xl">+</button>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-lg text-gray-700">${(product.price * product.quantity).toFixed(2)}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-lg font-medium">
                  <button onClick={() => handleRemove(product.Id)} className="text-red-600 hover:text-red-900">
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      {products.length > 0 && (
        <div className="mt-4">
          <div className="text-lg font-semibold">Total Price: ${totalPrice.toFixed(2)}</div>
        </div>
      )}
    </div>
  );
};

export default Cart;
