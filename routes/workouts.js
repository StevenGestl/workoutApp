const express = require('express')
const {
    createWorkout,
} = require('../controllers/workoutController')


const router = express.Router()


// GET all workouts from api
router.get('/', (req, res) => {
    res.json({mssg: 'GET all workouts'})
} )

// GET a single workout from api

router.get('/:id', (req, res) => {
    res.json({mssg: 'Get a single workout'})
})

// POST a new workout

router.post('/', createWorkout)

// DELETE a workout

router.delete('/:id', (req, res) => {
    res.json({mssg: 'DELETE a new workout'})
})

//UPDATE a workout

router.patch('/:id', (req, res) => {
    res.json({mssg: 'UPDATE a new workout'})
})

module.exports = router


// nodemon server.js to run 

// mongo username mario
//password letsAgo45

// npm install mongoose