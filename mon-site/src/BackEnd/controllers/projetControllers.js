const express = require('express')

var router = express.Router()
router.get('/', (req, res) => {
    res.render('layouts/mainLayout', {
    viewTitleMainLayout: 'layouts',
})
})

router.post('/', (req, res) => {
  insertData
})

function insertData() {
    console.log(req.body)
}

module.exports = router
