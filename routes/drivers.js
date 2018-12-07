const express = require('express')
const router = express.Router()

exports.router = router

router.get('/', (req, res) => {
    res.json(drivers())
})

const drivers = () => ([
    {
        name: 'Sebastian Vettel',
        date: new Date(),
    },
    {
        name: 'Lewis Hamilton',
        date: new Date(),
    },
    {
        name: 'Max Verstappan',
        date: new Date(),
    }
])