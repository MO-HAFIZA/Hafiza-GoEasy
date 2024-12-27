// routes/contract.js
const express = require('express');
const router = express.Router();
const Contract = require('../models/contract');

router.post('/contracts', async (req, res) => {
  try {
    const { driverId, agreementText } = req.body;
    const contract = new Contract({ driverId, agreementText, agreed: true });
    await contract.save();
    res.status(201).json({ message: "Contract agreement saved successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
