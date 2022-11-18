const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const sendMail = require('./sendMail')

const {
    REFRESH_TOKEN_SECRET,
    ACCESS_TOKEN_SECRET,
    ACTIVATION_TOKEN_SECRET,
    CLIENT_URL
} = process.env

const userCtrl = {
    register: async (req, res) => {
        try {
            const { firstname, lastname, username, password, email } = req.body;
            if (!username || !password || !email)
                return res.status(400).json({ msg: "Please fill in the field!" });


            if (!validateEmail(email))
                return res.status(400).json({ msg: "Invalid email." });

            const emailExist = await prisma.User.count(
                {
                    where: {
                        email: email
                    }
                })
            if (emailExist)
                return res.status(400).json({ msg: "This email already exist." })

            if (password.length < 6)
                return res.status(400).json({ msg: "Password must be at least 6 characters." });

            // Hashing the password
            const hashPass = await bcrypt.hash(password, 12)

            const newUser = {
                firstname, lastname, username, email, password: hashPass
            }

            const activation_token = createActivationToken(newUser)

            const url = `${CLIENT_URL}/user/activation/${activation_token}`
            //send mail to activate
            sendMail(email, url, "Verify your email address")

            res.json({ msg: "Register success, please check your gmail to avtivate your account!" })
        } catch (err) {
            return res.status(500).json({ msg: err.messgase })
        }
    },
    activateEmail: async (req, res) => {
        try {
            const { activation_token } = req.body;
            const user = jwt.verify(activation_token, ACTIVATION_TOKEN_SECRET)

            const { firstname, lastname, username, password, email } = user
            const check = await prisma.User.count(
                {
                    where: {
                        email: email
                    }
                })
            if (check) return res.status(400).json({ msg: "This email already exist." })

            await prisma.User.create(
                {
                    data: {
                        firstname: firstname,
                        lastname: lastname,
                        username: username,
                        password: password,
                        email: email,
                    }
                })
            res.json({ msg: "Account have been activated!" })
        } catch (err) {
            res.status(500).json({ msg: err.messgase })
        }
    },
    login: async (req, res) => {
        try {
            const { email, password } = req.body

            const user = await prisma.User.count({
                where: {
                    email: email
                }
            })
            if (!user) return res.status(400).json({ msg: "This email does not exist!" })

            const isMatch = await bcrypt.compare(password, user.password)
            if (!isMatch) res.status(400).json({ msg: "This password does not match!" })

            const refresh_token = createRefreshToken({ id: user.Id })
            res.cookie('refreshtoken', refresh_token, {
                httpOnly: true,
                path: '/user/refreshToken',
                maxAge: 70 * 24 * 60 * 60 * 1000 // 7days
            })

            res.login({ msg: "Login success!" })
        } catch (err) {
            res.status(500).json({ msg: err.messgase })
        }
    }
}

const createActivationToken = (payload) => {
    return jwt.sign(payload, ACTIVATION_TOKEN_SECRET, { expiresIn: '5m' })
}

const createAccessToken = (payload) => {
    return jwt.sign(payload, ACCESS_TOKEN_SECRET, { expiresIn: '15m' })
}

const createRefreshToken = (payload) => {
    return jwt.sign(payload, REFRESH_TOKEN_SECRET, { expiresIn: '7d' })
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