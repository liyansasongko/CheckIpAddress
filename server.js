'use strict'
const express = require('express')
const bodyParser = require('body-parser')
require('dotenv').config()
const requestIp = require('request-ip')

const app = express()
const PORT = process.env.PORT || 8810

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(requestIp.mw())

app.get('/', (req, res) => {
    const ip = req.clientIp
    res.end(ip)
})

app.listen(PORT, () => {
    console.log("Server listening on port "+PORT)
})