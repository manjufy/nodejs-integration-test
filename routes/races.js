const express = require('express')
const router = express.Router()

exports.router = router

router.get('/', (req, res) => {
    res.json(races())
})

const races = () => ([
    {
        name: 'Australian Grand Prix',
        date: new Date(),
    },
    {
        name: 'Abu Dhabi Grand Prix',
        date: new Date(),
    },
    {
        name: 'Chinese Grand Prix',
        date: new Date(),
    }
])