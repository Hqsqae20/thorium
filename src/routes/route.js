const express = require('express');
const router = express.Router();

// router.get('/students/:name', function(req, res) {
//     let studentName = req.params.name
//     console.log(studentName)
//     res.send(studentName)
// })

router.get('/test-me',function(req,res)
{
    res.send('My first ever api')
})
//1.this api will fetch all movies from array
router.get('/movies',function(req,res){
    res.send('["Welcome","Hey Baby","Faltu","Dabang","Rockstar"]')
})

//2.This Api will fetch all movie by indexId from array
router.get('/movies/:movieId',function(req,res){
    mov=["Welcome","Hey Baby","Faltu","Dabang","Rockstar"]
    let value=req.params.movieId;
    if(value>mov.lengthh-1)
    {
        res.send("doesnt exist")
    }
    else{
        res.send(mov[value])
    }
})
module.exports = router;

//3.this API will fetch all movies from array of objects by indexId
router.get('/moviez',function(req,res){
     res.send([ {
        id: 1,name: 'The Shining'
       }, 
       {
        id: 2,name:  'Incendies'
       }, 
       {
        id: 3,name:  'Rang de Basanti'
       },
        {
        id: 4,name:  '“Finding Demo”'
       }])
       

})

//this api will fetch all movies from array of objects by indexId
router.get('/films/:filmId',function(req,res){
    let movi=[ {id: 1,name: 'The Shining' }, {id: 2,name:'Incendies'},  {id: 3,name:'Rang de Basanti' },{id: 4,name:'“Finding Demo”' }]
    let value=req.params.filmId
    let found=false
    for(i=0;i<movi.length;i++)
    {
        if(movi[i].id==value){
            found=true
            res.send(movi[i])
            break
        }
    }
    if(found==false)
    {
        res.send('No movie exits with this id')
    }
})
