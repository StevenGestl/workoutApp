//requires mongoose package
const mongoose = require('mongoose') 

const Schema = mongoose.Schema
const workoutSchema = new Schema({ //new schema for workout post
    title: {
        type: String,  
        required: true
    },
        reps: {
            type: Number,
            required: true
        },
        load: {
            type: Number,
            required: true
        }
}, { timestamps: true}) //creates a timestamp when above property is created 

module.exports = mongoose.model('Workout', workoutSchema) //exports workout and workoutSchema to other files 

//schema are used to define the structure of documents saved in collection 