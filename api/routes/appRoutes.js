const express = require("express")

const { addStack, addCard, getData } = require("../controllers/appController")
const { protect } = require('../middlewares/authMiddleware')

const router = express.Router()

router.post('/', protect, getData)
router.post('/add/stack', protect, addStack)
router.post('/add/card', protect, addCard)
// router.put('/update', updateUser)

module.exports = router;