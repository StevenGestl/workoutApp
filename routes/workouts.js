const express = require('express')

const router = express.Router()


// GET all workouts from api
router.get('/', (req, res) => {
    res.json({mssg: 'GET all workouts'})
} )

// GET a single workout from api

router.get('/:id', (res, req) => {
    res.json({mssg: 'Get a single workout'})
})

// POST a new workout

router.post('/', (req, res) => {
    res.json({mssg: 'POST a new workout'})
})

// DELETE a workout

router.delete('/', (req, res) => {
    res.json({mssg: 'DELETE a new workout'})
})

//UPDATE a workout

router.patch('/', (req, res) => {
    res.json({mssg: 'UPDATE a new workout'})
})

module.exports = router


// nodemon server.js to run 
