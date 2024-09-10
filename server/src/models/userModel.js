const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const validator = require('validator')

const Schema = mongoose.Schema

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String, 
    required: true
  }
})

//static signin method

userSchema.statics.signIn = async function (emailusername, password) {

  if (!emailusername || !password) {
    throw Error("All fiels need to be filled")
  }

  const user = await this.findOne({
    $or: [
      { email: emailusername },
      { username: emailusername }
    ]})

  if  (!user) {
    throw Error('Please check your Sign In context!')
  }

  const match = await bcrypt.compare(password, user.password)

  if (!match) {
    throw Error('Please check your Sign In context!')
  }

  return user
}

// static signup method
userSchema.statics.signUp = async function (username, email, password, repassword) {

  if (!email || !password || !username) {
    throw Error("All fiels need to be filled")
  }
  if (password !== repassword) {
    throw Error("Passwords need to match")
  }
  if (!validator.isEmail(email)) {
    throw Error("Email is not valid")
  }
  if (!validator.isStrongPassword(password)) {
    throw Error("Your password is not strong enough")
  }

  const usernameExists = await this.findOne({ username })
  const emailExists = await this.findOne({ email })

  if (usernameExists) {
    throw Error('Username already in use')
  }
  if (emailExists) {
    throw Error('Email already in use')
  }

  const saltWater = await bcrypt.genSalt(12)
  const hash = await bcrypt.hash(password, saltWater)

  const user = await this.create({ username, email, password: hash })

  return user
}

module.exports = mongoose.model('User', userSchema)