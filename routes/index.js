const express = require('express');
const router = express.Router()
const forecast = require('../src/utils/forecast.js');
const geocode = require('../src/utils/geocode.js')

router.get('/', (req, res) => {
    res.render('index', {
        title: 'Home Page',
        creator: 'Manuel Carrero'
    })
})
router.get('/about', (req, res) => {
    res.render('about', {
        title: 'About',
        creator: 'Manuel Carrero'
    })
})
router.get('/weather-app', (req, res) => {
    if (!req.query.adress) {
        return res.send({
            error: 'You must provide an adress!'
        })
    }
        geocode.geocode(req.query.adress, (error, { latitude, location, longitude }={}) => {
            if (error) {
                return res.send({ error })
            }
            forecast.forecast(latitude, longitude, (error, { temperature, feelsLike, description }) => {
                if (error) {
                    return res.send({ error })
                }
                res.send({
                    location,
                    temperature,
                    feelsLike,
                    description,
                })
            })
        })
})
router.get('/help', (req, res) => {
    res.render('help', {
        title: 'Help',
        creator: 'Manuel Carrero'
    })
})
router.get('/help/*', (req, res) => {
    res.render('404', {
        error: 'Help article not foun 404',
        title: 'Help',
        creator: 'Manuel Carrero'
    })
})
router.get('/products', (req, res) => {
    if (!req.query.search) {
        return res.send({
            error: 'You must provide a search term'
        })
    }
    res.send({
        products: []
    })

})
router.get('*', (req, res) => {
    res.render('404', {
        error: 'Page not found',
        title: '404 error',
        creator: 'Manuel Carrero'
    })
})

module.exports = router;