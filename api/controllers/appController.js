const asyncHandler = require("express-async-handler")

const User = require("../schemas/user")
const Stack = require("../schemas/stack")
const Cards = require("../schemas/cards")


const getData = asyncHandler(async (req, res) => {
    const items = await Stack.find({user: req.user.id})

    return res.status(200).json(items);
})

// @access PRIVATE
const addStack = asyncHandler (async (req, res) => {

    if (!req.body.title){
        res.status(400)
        throw new Error('please add text')
    }

    
    const user = await User.findOne({user: req.user.id})

    if (user){
        const item = await Stack.create({
            title: req.body.title,
            user: req.user.id,
        })
        return res.status(201).json(item)

    }

    res.status(400)
    throw new Error('User not found')

})

const addCard = asyncHandler (async (req, res) => {

    if (!req.body.front || ! req.body.back){
        res.status(400)
        throw new Error('please add back or front')
    }

    
    const user = await User.findOne({user: req.user.id})

    if (user){
        const item = await Cards.create({
            frontText: req.body.front,
            backText: req.body.back,
            user: req.user.id,
            stack_id: req.body.stack_id
        })
        return res.status(201).json(item)

    }

    res.status(400)
    throw new Error('User not found')

})


module.exports = {
    addStack,
    addCard,
    getData
}