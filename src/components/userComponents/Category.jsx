import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategory } from '../../store/userSlice/GetcategoriesReducer';
import { NavLink } from 'react-router-dom';

const Category = () => {
  const dispatch = useDispatch();
  const data = useSelector(state => state.getCategory.data);

  useEffect(() => {
    console.log(data); // Will log whenever data changes
  }, [data]);

  const fetch = (cat) => {
    dispatch(fetchCategory(cat));
  };

  return (
    <>
      <h1 className='text-center text-xl font-semibold pt-10'>Click on Category to brower Products</h1>
      <div className="flex flex-row items-center justify-center p-5">

        <div className=' flex flex-row items-center gap-10 w-[200px] h-[200px] '>
          <button onClick={() => { fetch("Laptop") }} className='btn mr-3 bg-green-500 p-5'>Laptop</button>
          <button onClick={() => { fetch("Phone") }} className='btn bg-green-500 p-5'>Phone</button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-2 p-20">
          {data && data.map(item => (
            <div key={item.Id} className="bg-white shadow-md p-4">
              <img src={item.img} alt="" className="w-full h-auto" />
              <p className="text-lg font-semibold truncate">{item.Title}</p>
              <p className="text-gray-600">${item.price}</p>
            </div>
          ))}
        </div>
      </div>
      <div className='flex  flex-col  gap-10 justify-center items-center'>
        <h1 className='text-center text-xl font-semibold pt-10' >click here to Browse All other Products</h1>
        <NavLink to={'/products'}>
          <button className='btn mr-3 bg-green-500 p-5 w-[130px]'
          >
            All Products
          </button>
        </NavLink>
      </div>
    </>

  );
};

export default Category;
