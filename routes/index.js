const express = require('express');
const router = express.Router();
const todos = require('../models/express-models/todos');
module.exports = router;

// write your routes here. Feel free to split into multiple files if you like.
//ToDo Routes:

router.get('/', (req, res, next) => {
    try{
        const people = todos.listPeople();
    res.json(people);
    }catch(error){
            next(error);
        }
});

router.get('/:name/tasks', (req, res, next) => {
    try{
        const name = todos.list(req.params.name);
        if(!name){
            let err = Error('Name not found');
            err.status = 404;
            throw err;
        }
        if(req.query.status === 'complete'){
            let completedNames = name.filter((task) => task.complete === true);
            res.json(completedNames);
        }else if(req.query.status === 'active'){
            let activeNames = name.filter((task) => task.complete === false);
            res.json(activeNames);
        }else {
            res.json(name);
        }
    }catch(error){
        next(error);
    }
});

//it took me a little while and some major console.log-ing but I got it!! 
//I cannot believe I got this. This is way harder for me than sequelize stuff.
//Now, onward to Cody's Cafe!!!!!

router.post('/:name/tasks',  (req, res, next)=> {
    try{
        const addIt = todos.add(req.params.name, req.body);
        if(!req.body.content){
            let err = Error('No new tasks');
            err.status = 400;
            throw err;
        }
        res.status(201).json(addIt);
    }catch(error){
        next(error);
    }
});

router.put('/:name/tasks/:idx', (req, res, next) => {
     try{
        todos.complete(req.params.name, req.params.idx);
        res.sendStatus(200);
     }catch(error){
        next(error);
    }
});
//Legit, I had this as /:index and spun around for a long-ass time;
//time to eat some food and touch some grass. But first, let me finish the last

router.delete('/:name/tasks/:idx', (req, res, next) => {
    try{
        todos.remove(req.params.name, req.params.idx);
        res.sendStatus(204);
    }catch (error){
        next(error);
    }
});

