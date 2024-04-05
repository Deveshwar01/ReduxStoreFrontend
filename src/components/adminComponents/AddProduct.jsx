import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addProduct, STATUSES } from '../../store/adminSlice/productSlice';
import { toast } from 'react-hot-toast';

const AddProduct = () => {
  const [id, setId] = useState("");
  const [productImg, setproductImg] = useState('');
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState('')
  const { status } = useSelector(state => state.addProduct || {});
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch(addProduct({ id, productImg, title, price, category }));
      toast.success('Product added successfully');
    } catch (error) {
      console.error(`Error during adding Product: ${error}`);
      window.alert(`Error during adding Product: ${error.message}`);
    }
  }
  if (status === STATUSES.LOADING) {
    return <h2>LOADING.....</h2>;
  }

  if (status === STATUSES.ERROR) {
    return <h2>Something went wrong...</h2>;
  }

  return (
    <>
      <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg p-6 mt-10">
        <h2 className="text-xl font-semibold mb-4">Add Product</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label for="product_id" className="block text-sm font-medium text-gray-700">ID</label>
            <input
              type="text"
              required
              value={id}
              onChange={(e) => setId(e.target.value)}
              className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
          </div>

          <div className="mb-4">
            <label for="product_name" className="block text-sm font-medium text-gray-700">Img</label>
            <input
              type="text"
              required
              value={productImg}
              onChange={(e) => setproductImg(e.target.value)}
              className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
          </div>

          <div className="mb-4">
            <label for="product_Title" className="block text-sm font-medium text-gray-700">Title</label>
            <textarea
              required
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              rows="3"
              className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"></textarea>
          </div>

          <div className="mb-4">
            <label for="product_price" className="block text-sm font-medium text-gray-700">Price</label>
            <input
              type="number"
              required
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
          </div>

          <div className="mb-4">
            <label for="product_price" className="block text-sm font-medium text-gray-700">Category</label>
            <input
              type="text"
              required
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
          </div>

          <div className="mt-6">
            <button onClick={(e) => handleSubmit(e)} type="submit"
              className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              Add Product
            </button>
          </div>
        </form>
      </div>

    </>
  )
}

export default AddProduct