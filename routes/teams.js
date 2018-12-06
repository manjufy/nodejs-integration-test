const express = require('express')
const router = express.Router()

exports.router = router

router.get('/', (req, res) => {
    res.json(teams())
})

const teams = () => ([
    {
        name: 'Ferrari',
        country: 'Italy'
    },
    {
        name: 'Williams',
        country: 'United Kingdom'
    },
    {
        name: 'Petronas AMS Mercedes F1 Team',
        country: 'Germany'
    },
    {
        name: 'Force India',
        country: 'United Kingdom'
    },
    {
        name: 'Renault',
        country: 'France'
    },
    {
        name: 'RedBull',
        country: 'Austria'
    },
    {
        name: 'Hass',
        country: 'United States'
    },
    {
        name: 'Suaber',
        country: 'Switzerland'
    }
])