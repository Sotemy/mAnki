const express = require("express")
require('dotenv').config()
const cors = require("cors")

const connectDB = require("./db/db")
const errorHandler = require( "./middlewares/errorMiddleware")

const app = express();

// app.use()
connectDB()

const whitelist = ["http://localhost:3000"]

const corsOptions = {
  origin: function (origin, callback) {
    if (!origin || whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error("Not allowed by CORS"))
    }
  },
  credentials: true,
}
app.use(cors(corsOptions))

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// app.use('/api', require('./routes/appRoutes'))
app.use('/api/auth', require('./routes/authRoutes'))
app.use('/api', require('./routes/appRoutes'))

app.use(errorHandler)

app.listen(3001, () => {
  console.log(`Example app listening on port 3001`)
})