const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

app.use('/auth', createProxyMiddleware({ target: 'http://authService:3000', changeOrigin: true }));
app.use('/invoices', createProxyMiddleware({ target: 'http://invoiceService:3001', changeOrigin: true }));
app.use('/reminders', createProxyMiddleware({ target: 'http://reminderService:3002', changeOrigin: true }));

const PORT = 3003;
app.listen(PORT, () => console.log(`API Gateway running on port ${PORT}`));
