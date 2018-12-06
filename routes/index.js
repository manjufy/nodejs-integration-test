const express = require('express')
const router = express.Router()

module.exports = router

router.get('/', (req, res) => {
    return res.json({
        status: 'SUCCESS',
        code: 200,
        message: ''
    })
})

router.use('/teams', require('./teams').router)
// router.use('/races', require('./races').router)
// router.use('/drivers', require('./drivers').router)