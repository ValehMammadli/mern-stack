const express= require('express')
const Workout =require('../models/workoutModel')
const router = express.Router();

router.get( '/', (req, res) => {
    res.json({mssg: 'Welcome to the API'})
});


router.post('/',async (req,res)=>{
    const {title,load,reps} = req.body
    try{
        const workout = await Workout.create({title,load,reps})
        res.status(200).json(workout)
    }catch(error){
        res.status(400).json({error:error.message})
    }
    

    })
    
module.exports = router; 