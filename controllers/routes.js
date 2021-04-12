const router = require('express').Router();
const path = require('path');
const mongoose = require('mongoose');
const { Workout, Exercise } = require('../models/index')
const db = require('../models')

router.get('/', async (req, res) => {
    try {
        res.sendFile(path.join(__dirname, '../public/index.html'))
    } catch (err) {
        res.status(500).json(err)
    }
})

router.get('/exercise', async (req, res) => {
    try {
        res.sendFile(path.join(__dirname, '../public/exercise.html'))
    } catch (err) {
        res.status(500).json(err)
    }
})

router.get('/stats', async (req, res) => {
    try {
        res.sendFile(path.join(__dirname, '../public/stats.html'))
    } catch (err) {
        res.status(500).json(err)
    }
})

router.get('/api/workouts', (req, res) => {
    db.Workout.find().sort({ _id: -1})
        .then(latest => {
            res.json(latest)
        })
        .catch(err => {
            res.json(err)
        })
})

module.exports = router;