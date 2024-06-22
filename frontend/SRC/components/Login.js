import React from 'react';

const Login = () => {
  const handleLogin = () => {
    window.location.href = `${process.env.REACT_APP_API_URL}/auth/google`;
  };

  return (
    <div className="container text-center">
      <h2>Login</h2>
      <button className="btn btn-primary" onClick={handleLogin}>Login with Google</button>
    </div>
  );
};

export default Login;
