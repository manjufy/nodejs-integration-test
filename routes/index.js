const express = require('express')
const router = express.Router()

module.exports = router

router.get('/', (req, res) => {
    return res.send({
        status: 'SUCCESS',
        code: 200,
        message: 'To use this API, try accessing http://localhost:3000/api/{route}'
    })
})

router.use('/teams', require('./teams').router)
router.use('/races', require('./races').router)
router.use('/drivers', require('./drivers').router)