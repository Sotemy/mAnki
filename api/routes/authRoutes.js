const express = require("express")

const { loginUser, registerUser, resetUser } = require("../controllers/authController")
// const { protect } = require('../middlewares/authMiddleware')

const router = express.Router()

router.post('/login', loginUser)
router.post('/register', registerUser)
router.post('/reset', resetUser)
// router.put('/update', updateUser)

module.exports = router;