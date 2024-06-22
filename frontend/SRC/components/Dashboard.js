import React, { useEffect, useState } from 'react';
import axios from 'axios';
import InvoiceList from './InvoiceList';

const Dashboard = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL}/auth/status`, { withCredentials: true })
      .then(response => {
        setUser(response.data.user);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container">
      <h2>Welcome, {user.displayName}</h2>
      <InvoiceList />
    </div>
  );
};

export default Dashboard;
