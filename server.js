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

app.get('/', async (req, res) => {
    const ip = req.clientIp

    const ipaddress = ip.split(":")
    
    res.send({
        ip_address: ipaddress[2]
    })
})

app.listen(PORT, () => {
    console.log("Server listening on port "+PORT)
})