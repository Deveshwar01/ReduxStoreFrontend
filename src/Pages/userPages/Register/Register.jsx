import React, { useState } from 'react';
import { FaUser, FaLock } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Register, STATUSES } from '../../../store/userSlice/authSlice';
import { toast } from 'react-hot-toast';

function RegisterForm({ handleAction }) {
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { status } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigation = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch(Register({ userName, email, password }));
      toast.success('Register successfully');
      navigation('/');
    } catch (error) {
      console.error(`Error during registration: ${error}`);
      window.alert(`Error during registration: ${error.message}`);
    }
  };

  if (status === STATUSES.LOADING) {
    return <h2>LOADING.....</h2>;
  }

  if (status === STATUSES.ERROR) {
    return <h2>Something went wrong...</h2>;
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-sm mx-auto mt-8">
      <h1 className="text-2xl font-bold mb-4">Sign Up</h1>
      <div className="mb-4 relative">
        <input
          type="text"
          placeholder="User name"
          required
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          className="w-full px-4 py-2 pl-10 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
        />
        <FaUser className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400" />
      </div>
      <div className="mb-4 relative">
        <input
          type="email"
          placeholder="Email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-4 py-2 pl-10 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
        />
        <MdEmail className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400" />
      </div>
      <div className="mb-4 relative">
        <input
          type="password"
          placeholder="Password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full px-4 py-2 pl-10 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
        />
        <FaLock className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400" />
      </div>
      <button
        type="submit"
        className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
      >
        Sign Up
      </button>
    </form>
  );
}

export default RegisterForm;
