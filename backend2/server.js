const express = require('express')
const app = express()

app.use('/api', (req, res) => {
    res.send("Success!")
})

app.listen(5000)