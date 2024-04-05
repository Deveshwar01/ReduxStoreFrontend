import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Login, STATUSES } from '../../../store/userSlice/authSlice';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';

function LoginForm({ handleAction }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { status } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigation = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch(Login({ email, password }));
      toast.success(' Login successfully');
      navigation('/');

    } catch (error) {
      console.error(`Error during login: ${error}`);
      window.alert(`Error during login: ${error.message}`);
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
      <h1 className="text-2xl font-bold mb-4">Log In</h1>
      <div className="mb-4">
        <input
          type="email"
          placeholder="Email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
        />
      </div>
      <div className="mb-4">
        <input
          type="password"
          placeholder="Password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
        />
      </div>
      <button
        type="submit"
        className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
      >
        Log In
      </button>
    </form>
  );
}

export default LoginForm;
