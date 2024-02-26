require('dotenv').config()

const express = require('express')
const workoutRoutes = require('./routes/workouts')

//express app
const app = express()


// middleware to log requests that are made, next is required to move onto the next app 
app.use(express.json())

app.use(( req, res, next) => {
    console.log(req.path, req.method)
    next()
})

//routes
app.use('/api/workouts',workoutRoutes)

// connect to db
mongoose.connect(process.env.MONGO_UI)
.then(() => {
    // listen for requests
app.listen(process.env.PORT, () => {
    console.log('connected to db & listening on port', processs.env.PORT)
})
})
.catch((error) => {
    console.log(error)
})



