import React, { useEffect, useState } from 'react';
import axios from 'axios';

const InvoiceList = () => {
  const [invoices, setInvoices] = useState([]);

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL}/invoices/due`)
      .then(response => {
        setInvoices(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  const handleSendReminder = (invoiceId, email, amountDue) => {
    axios.post(`${process.env.REACT_APP_API_URL}/reminders/send-reminder`, {
      invoiceId,
      email,
      amountDue
    })
      .then(response => {
        alert('Reminder sent');
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <div>
      <h3>Due Invoices</h3>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Client</th>
            <th>Amount Due</th>
            <th>Due Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {invoices.map(invoice => (
            <tr key={invoice._id}>
              <td>{invoice.client}</td>
              <td>{invoice.amountDue}</td>
              <td>{new Date(invoice.dueDate).toLocaleDateString()}</td>
              <td>
                <button
                  className="btn btn-warning"
                  onClick={() => handleSendReminder(invoice._id, invoice.client, invoice.amountDue)}
                >
                  Send Reminder
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default InvoiceList;
