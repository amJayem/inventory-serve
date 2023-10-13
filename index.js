const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv').config()
const colors = require('colors')
const mongoose = require('mongoose')

const app = require('./app')

mongoose.connect(process.env.DB).then(() => {
  console.log('Database Connected!!'.green.bold)
})

const port = process.env.PORT

app.listen(port, () => {
  console.log(`inventory server is running on http://localhost:${port}`.yellow)
})
