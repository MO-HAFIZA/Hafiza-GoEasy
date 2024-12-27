const express = require('express')
const { registerUser, loginUser , findUser , findDrivers} = require('../controllers/driverController')

const router = express.Router()

router.post('/driverRegister', registerUser)
router.post('/driverLogin', loginUser)
// server.js or driverRoutes.js
router.get('/findDrivers', findDrivers);
  
module.exports = router