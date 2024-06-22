const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const ZAPIER_WEBHOOK_URL = process.env.ZAPIER_WEBHOOK_URL;

app.post('/send-reminder', async (req, res) => {
  const { invoiceId, email, amountDue } = req.body;
  await axios.post(ZAPIER_WEBHOOK_URL, { invoiceId, email, amountDue });
  res.status(200).send('Reminder sent');
});

const PORT = 3002;
app.listen(PORT, () => console.log(`Reminder Service running on port ${PORT}`));
