const express = require('express'),
    app = express(),
    port = process.env.PORT || 3000,
    bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

// routes/controllers
app.use('/api', require('./routes/index'))

// catch all
app.use((req, res) => {
    res.status(404).send({
        url: `${req.originalUrl} not found`
    })
})
app.listen(port)

console.log(`RESTful API listening to: ${port}`)

module.exports = app