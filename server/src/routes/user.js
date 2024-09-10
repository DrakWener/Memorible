const express = require('express')

const router = express.Router()
const { signInUser , signUpUser } = require('../controllers/userController')

//Sign in
router.post('/SignIn', signInUser )

//Sign up
router.post('/SignUp', signUpUser )

module.exports = router