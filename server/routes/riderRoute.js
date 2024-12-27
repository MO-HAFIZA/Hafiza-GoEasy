const express = require('express')
const { registerUser, loginUser , findUser , findUsers} = require('../controllers/riderController')

const router = express.Router()

router.post('/riderRegister', registerUser)
router.post('/riderLogin', loginUser)
router.get('/find/:userId', findUser)
router.get('/', findUsers)

module.exports = router