require('dotenv').config()

const User = require('../models/userModel')
const jsonwt = require('jsonwebtoken')

const createToken = (_id, username) => {

  return jsonwt.sign( {_id, username}, process.env.JWTSECRET, { expiresIn:'14d'})
}

//SignIn

const signInUser = async (req, res) => {
  
  const {emailusername, password} = req.body

  try {
    const user = await User.signIn(emailusername, password)

    const token = createToken(user._id, user.username)

    res.status(200).json({username: user.username, token:token})

  } catch (error) {
    res.status(400).json({error: error.message})
  }

}

//SignUp

const signUpUser = async (req, res) => {

  const {username, email, password, repassword} = req.body

  try {
    const user = await User.signUp(username, email, password, repassword)

    const token = createToken(user._id, user.username)

    res.status(200).json({username: user.username, token:token})


  } catch (error) {
    res.status(400).json({error: error.message})
  }

}

module.exports = { signInUser, signUpUser }
