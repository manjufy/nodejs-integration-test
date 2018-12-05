const express = require('express')
const router = express.Router()

module.exports = router

router.get('/', (req, res) => {
    return {
        status: 'SUCCESS',
        code: 200,
        message: ''
    }
})