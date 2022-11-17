const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const sendMail = require('./sendMail')


const { CLIENT_URL } = process.env.CLIENT_URL
const ACTIVATION_TOKEN = process.env.ACTIVATION_TOKEN_SECRET
const ACCESS_TOKEN = process.env.ACCESS_TOKEN_SECRET
const REFRESH_TOKEN = process.env.REFRESH_TOKEN_SECRET

const userCtrl = {
    register: async (req, res) => {
        try {
            const { username, password, email } = req.body;
            if (!username || !password || !email)
                return res.status(401).json({ msg: "Please fill in the field!" });


            if (!validateEmail(email))
                return res.status(400).json({ msg: "Invalid email." });

            // const emailExist = await prisma.user.findUnique({ email })
            // if (emailExist)
            //     return res.status(400).json({ msg: "This email already exist." })

            if (password.length < 6)
                return res.status(400).json({ msg: "Password must be at least 6 characters." });

            const hashPass = await bcrypt.hash(password, 12)

            const newUser = {
                username, password: hashPass, email
            }

            const activation_token = createActivationToken(newUser)

            const url = `${CLIENT_URL}/user/activation/${activation_token}`
            //send mail to activate
            sendMail(email, url, "Verify your email address")
            console.log(sendMail.sendEmail);
            res.json({ msg: "Register success, please check your gmail to avtivate your account!" })
        } catch (err) {
            return res.status(500).json({ msg: err.messgase })
        }
    }
}

const createActivationToken = (payload) => {
    return jwt.sign(payload, ACTIVATION_TOKEN, { expiresIn: '5m' })
}

const createAccessToken = (payload) => {
    return jwt.sign(payload, ACCESS_TOKEN, { expiresIn: '15m' })
}

const createRefreshToken = (payload) => {
    return jwt.sign(payload, REFRESH_TOKEN, { expiresIn: '7d' })
}

const validateEmail = (email) => {
    return String(email)
        .toLowerCase()
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
};

module.exports = {
    userCtrl
}