//Jeff Donahue: 5/1/23 setup

const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.render('index')
})

module.exports = router