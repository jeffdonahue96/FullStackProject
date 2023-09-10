//Jeff Donahue Project: 5/1/23

const express = require('express')
const router = express.Router()
const DriverSelection = require('../models/driverSelection')


//all authors route
router.get('/', async (req, res) => {
    let searchOptions = {}
    if(req.query.name != null && req.query != ''){
        searchOptions.name = new RegExp(req.query.name, 'i')
    }
    try {
        const driverSelections = await DriverSelection.find(searchOptions)
        res.render('driverSelections/index', {
            driverSelections: driverSelections,
            searchOptions: req.query
        })

    }
    catch{
        res.redirect('/')

    }
})

//New author route
router.get('/new', (req, res) =>{
    res.render('driverSelections/new', {driverSelection: new DriverSelection()})
})

//Create author route
router.post('/', async (req, res) => {
    const driverSelection = new DriverSelection({
        name: req.body.name
    })
    try{
    const newSelection = await driverSelection.save()
    res.redirect(`driverSelections`)
    }
    catch{
        res.render('driverSelections/new',{
            driverSelection: driverSelection,
            errorMessage:'Error Creating Driver Selection...'
        })
    }

})

module.exports = router