require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')

const userRoutes = require('./routes/user')

const app = express()

app.use(express.json())

app.use((req, res, next) => {
  console.log(req, res, req.method)
  next()
})

//routes

app.use('/api/user', userRoutes)

mongoose.connect(process.env.MongoURL)
  .then(
    app.listen(process.env.PORT, () => {
      console.log(`Server is up on ${process.env.PORT}`)
    }))
  .catch((err) => {
    console.log(err)
  })