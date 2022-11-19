const express = require("express")
const router = express.Router()
const { userCtrl } = require("../controllers/userControllers")

router.post('/register', userCtrl.register)
router.post('/activate', userCtrl.activateEmail)
router.post('/login', userCtrl.login)
router.post('/refresh_token', userCtrl.getAccessToken)
module.exports = router