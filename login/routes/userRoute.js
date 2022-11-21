const express = require("express")
const auth = require("../middlewares/auth")
const router = express.Router()
const { userCtrl } = require("../controllers/userControllers")
const authAdmin = require("../middlewares/authAdmin")

router.post('/register', userCtrl.register)

router.post('/activation', userCtrl.activateEmail)

router.post('/login', userCtrl.login)

router.post('/refresh_token', userCtrl.getAccessToken)

router.post('/forgot', userCtrl.forgotPass)

router.post('/reset', auth, userCtrl.resetPass)

router.get('/infor', auth, userCtrl.getUserInfo)

router.get('/getAll', auth, authAdmin, userCtrl.getUsersAllInfo)

router.get('/logout', userCtrl.logout)

router.patch('/updateUser', auth, userCtrl.updateUser)

router.patch('/updateUser_role/:id', auth, authAdmin, userCtrl.updateUserRole)

router.delete('/deleteUser/:id', auth, authAdmin, userCtrl.deleteUser)

module.exports = router