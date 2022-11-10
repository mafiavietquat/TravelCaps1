require('dotenv').config()
const express = require('express')
const mysql = require('mysql')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const fileUpload = require('express-fileupload')

const app = express()
app.use(express.json())
app.use(cors())
app.use(cookieParser())
app.use(fileUpload({
    useTempFiles: true
}))

app.use('/', (req, res, next) => {
    res.json({ msg: "Hello!" })
})

//connect to mysql
const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "1234",
    database: "dbTravelCaps",
    insecureAuth: true,
    port: 3307
});

//test connect
con.connect(function (err) {
    if (err) throw err;
    console.log("Connected to mysql!!!")
});

//PORT
const PORT = process.env.port || 5000
app.listen(PORT, () => {
    console.log("app is listening to ", PORT);
})
