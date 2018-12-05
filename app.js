const express = require('express'),
    app = express(),
    port = process.env.PORT || 3000,
    bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

// routes/controllers
app.use('/api', require('./routes/index'))

app.listen(port)

console.log(`RESTful API listening to: ${port}`)

module.exports = app