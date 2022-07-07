const express = require("express")
require('dotenv').config()
const cors = require("cors")

const swaggerJsDoc = require("swagger-jsdoc")
const swaggerUI = require("swagger-ui-express")

const connectDB = require("./db/db")
const errorHandler = require( "./middlewares/errorMiddleware")

const app = express();

const swaggerOptions = {
  swaggerDefinition: {
    openapi: '3.0.0',
    info: {
      title: 'API',
      version: '0.0.1',
      description: "REST API on express"
    },
  },
  apis: ['index.js'],
}

const swaggerDocs = swaggerJsDoc(swaggerOptions)

app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocs))

/** 
 * @swagger 
 * /api/auth/login:
 *   get: 
 *     description: Get all Employee by Email
 *     responses:  
 *       200: 
 *         description: Success  
 *   
 */ 


connectDB()

const whitelist = ["http://localhost:3000", "http://192.168.56.1:3000"]

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