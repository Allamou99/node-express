const express = require('express');
const bodyPaser = require('body-parser');

const leaderRouter = express.Router();
leaderRouter.use(bodyPaser.json());

leaderRouter.route('/')
.all((req,res,next)=>{
    res.statusCode = 200;
    res.setHeader('Content-Type','text/plain');
    next();
})
.get((req,res,next)=>{
    res.end('All the leaders will be returned to you .');
})
.post((req,res,next)=>{
    res
})
