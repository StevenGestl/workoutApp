require('dotenv').config()

const express = require('express')
const workoutRoutes = reqwuire('./routes/workouts')

//express app
const app = express()


// middleware to log requests that are made, next is required to move onto the next app 
app.use(( req, res, next) => {
    console.log(req.path, req.method)
    next()
})

//routes
app.use(workoutRoutes)

// listen for requests
app.listen(process.env.PORT, () => {
    console.log('Listening on port 4000')
})


