const obj=require('../logger/logger')
const obj2=require('../util/helper')
const obj3=require('../validator/formatter')
const express = require('express');
const router = express.Router();
const lodash=require('lodash')



    router.get('/test-me', function (req, res) {
    obj.welcome('Welcome to my application. I am Sapna Dhaksiya and a part of FunctionUp Thorium cohort')
    
    obj2.printDate()
    obj2.printMonth() 
    obj2.getBatchInfo() 

    obj3.trim()
    obj3.toLowerCase()
    obj3.toUpperCase()
    


    res.send('My first ever api!')
});
router.get('/hello', function (req, res){
    let arr=["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"]
    console.log(lodash.chunk(arr,4))

    let arr2=[1,3,5,7,9,11,15,17,19]
    console.log(lodash.tail(arr2))

    let first=[10,7,6,5,4,8,5]
    let second=[4,7,8,5,4,8,3]
    let third=[9,7,6,9,4,11,3]
    let fourth=[43,7,6,5,7,4,5]
    let fifth=[1,7,32,5,1,8,5]
    console.log(lodash.union(first,second,third,fourth,fifth))

    let pairs=[["horror","The Shining"],["drama","Titanic"],["thriller","Shutter Island"],["fantasy",
    "Pans Labyrinth"]]
    console.log(lodash.fromPairs(pairs))

    res.send('I am using lodash')

 


})

module.exports = router;