import React, { useState } from 'react';
import './style.css';
import RegisterForm from './Register/Register';
import LoginForm from './Login/Login';

function Auth() {
  const [action, setAction] = useState("Sign Up");

  const handleAction = () => {
    setAction(prevAction => prevAction === "Sign Up" ? "Log In" : "Sign Up");
  }

  return (
    <div className="parent">
      <div className="wrapper">
        {action === "Sign Up" ? <RegisterForm handleAction={handleAction} /> : <LoginForm handleAction={handleAction} />}
      </div>
    </div>
  );
}

export default Auth;
