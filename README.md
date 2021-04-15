# FitnessTracker
tracking fitness with MongoDB and Mongoose

## Features
* a graphical stats dashboard that graphs the last seven workouts
* MongoDB, Mongoose

## Reasoning
Given a working front-end, we must create routes and models such that it stitches everything together into a working state.

## Challenges & Process
1. Creating my model correctly took a lot longer than I thought it would. Initially I created two schemas `workout` and `exercise` with `workout` ref'ing exercises as a foreign key; this worked initially with the seed but I ran into problems later trying to access the referenced data.

2. Recreated the model into simply one `workout`, so much simpler and seeded straight away.

3. Playing around with the `/api/workouts` GET route was a long process for me, I tried so many ways to get `db.collection.aggregate` working, and in the end I saw a syntax that I hadn't been using at all which ended up working for me, thankfully.

4. 

## Link to repo
[Repo](https://github.com/bendemic90/FitnessTracker)

## Link to deployed website
[Heroku](https://fast-inlet-61769.herokuapp.com/)