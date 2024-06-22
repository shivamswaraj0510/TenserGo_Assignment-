const mongoose = require('mongoose');

const invoiceSchema = new mongoose.Schema({
  client: String,
  amountDue: Number,
  dueDate: Date,
  status: { type: String, default: 'unpaid' }
});

module.exports = mongoose.model('Invoice', invoiceSchema);
