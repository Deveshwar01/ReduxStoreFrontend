import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPro, STATUSES, deletePro } from '../../store/adminSlice/showProductSlice';

const ShowProduct = () => {
  const products = useSelector((state) => state.pro.data);
  const status = useSelector(state => state.pro.status);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPro());
  }, [dispatch]);
  console.log(products);

  const handleDelete = (productId) => {
    dispatch(deletePro(productId));
  };

  if (status === STATUSES.LOADING) {
    return <h2>Loading</h2>;
  }
  if (status === STATUSES.ERROR) {
    return <h2>Something went wrong</h2>;
  }

  return (
    <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-6 mt-10">
      <h2 className="text-xl font-semibold mb-4">All Products</h2>
      <div>
        <table className="table-auto w-full h-full">
          <thead>
            <tr>
              <th className="px-4 py-2">ID</th>
              <th className="px-4 py-2">Image</th>
              <th className="px-4 py-2">Title</th>
              <th className="px-4 py-2">Price</th>
              <th className="px-4 py-2">Category</th>
              <th className="px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map(product => (
              <tr key={product.Id}>
                <td className="border px-4 py-2">{product.Id}</td>
                <td className="border px-4 py-2">
                  <img  className='w-full h-[50px] object-contain mb-4' src={product.img} alt="" />
                </td>
                <td className="border px-4 py-2">{product.Title}</td>
                <td className="border px-4 py-2">{product.price}</td>
                <td className="border px-4 py-2">{product.category}</td>
                <td className="border px-4 py-2">
                  <button
                    className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
                    onClick={() => handleDelete(product.Id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ShowProduct;
