// server/routes/smsRoutes.js
require('dotenv').config();
const express = require('express');
const router = express.Router();
const twilio = require('twilio');

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = new twilio(accountSid, authToken);

router.post('/send-sms', (req, res) => {
  const { to, message } = req.body;

  client.messages
    .create({
      body: message,
      from: process.env.TWILIO_PHONE_NUMBER,
      to: to 
    })
    .then(message => res.status(200).json({ success: true, sid: message.sid }))
    .catch(error => res.status(500).json({ success: false, error: error.message }));
});

module.exports = router;
