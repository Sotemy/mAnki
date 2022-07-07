const asyncHandler = require("express-async-handler")
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
require('dotenv').config()

const User = require('../schemas/user')
const sendEmail = require("../email")

// @access PUBLIC
const loginUser = asyncHandler (async (req, res) => {

    const { email, password } = req.body

    // Check user email
    const user = await User.findOne({email})

    if (user && (await bcrypt.compare(password, user.password))) {
        return res.json({
            _id: user.id,
            username: user.username,
            email: user.email,
            token: generateToken(user._id)
        })
    } else {
        res.status(400)
        console.log('invalid creaditals')
        throw new Error('invalid creaditals')
    }
})

// @access PUBLIC
const registerUser = asyncHandler (async (req, res) => {
    const { username, email, password } = req.body

    if (!username || !password || !email){
        res.status(400);
        throw new Error('Please fill all fields')
    }

    const userExists = await User.findOne({email})

    if (userExists){
        res.status(400)
        throw new Error('User exists')
    }

    // Hash password
    const salt = await bcrypt.genSalt(10)
    const password_hash = await bcrypt.hash(password, salt)

    // create user
    const user = await User.create({
        username,
        email,
        password: password_hash
    })

    if (user){
        return res.status(201).json({
            _id: user.id,
            username: user.username,
            email: user.email,
            token: generateToken(user._id)
        })
    }
    res.status(400)
    throw new Error('Invalid user data')
})

const resetUser = asyncHandler (async (req,res) => {
    const {email} = req.body

    const user = await User.findOne({email})

    if (user) {

        sendEmail({email}, jwt.sign( {email}, process.env.SECRET_JWT, {expiresIn: '10m'}))

        return res.status(201).json({
            message: "Please check your E-Mail"
        })
    }
    res.status(500)
    throw new Error('Something went wrong')
})


const generateToken = (id) => {
    return jwt.sign({ id }, process.env.SECRET_JWT, {
        expiresIn: '30d',
    })
}

module.exports = {
    loginUser,
    registerUser,
    resetUser
}