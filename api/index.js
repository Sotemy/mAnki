const express = require("express")
require('dotenv').config()

const connectDB = require("./db/db")
const errorHandler = require( "./middlewares/errorMiddleware")

const app = express();

// app.use()
connectDB()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// app.use('/api', require('./routes/appRoutes'))
app.use('/api/auth', require('./routes/authRoutes'))
app.use('/api', require('./routes/appRoutes'))

app.use(errorHandler)

app.listen(5000, () => {
  console.log(`Example app listening on port 5000`)
})