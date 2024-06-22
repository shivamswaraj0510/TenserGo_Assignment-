const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const Invoice = require('./models/Invoice');

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://mongo:27017/invoices', { useNewUrlParser: true, useUnifiedTopology: true });

app.get('/invoices/due', async (req, res) => {
  const dueInvoices = await Invoice.find({ dueDate: { $lt: new Date() }, status: 'unpaid' });
  res.json(dueInvoices);
});

app.post('/invoices', async (req, res) => {
  const invoice = new Invoice(req.body);
  await invoice.save();
  res.status(201).json(invoice);
});

const PORT = 3001;
app.listen(PORT, () => console.log(`Invoice Service running on port ${PORT}`));
