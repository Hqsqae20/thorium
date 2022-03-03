const { count } = require("console")
const authorModel = require("../models/authorModel")
const bookModel= require("../models/bookModel")
const publisherModel = require("../models/publisherModel")

const createBook= async function (req, res) {
    let book = req.body
    let authorId = book.author
    let publisherId = book.publisher

    
    if(!authorId) return res.send('The request is not valid as the author details are required.')

    
    let author = await authorModel.findById(authorId)
    if(!author) return res.send('The request is not valid as no author is present with the given author id')

    
    if(!publisherId) return res.send('The request is not valid as the publisher details are required.') 

    
    let publisher = await publisherModel.findById(publisherId)
    if(!publisher) return res.send('The request is not valid as no publisher is present with the given publisher id')

    let bookCreated = await bookModel.create(book)
    return res.send({data: bookCreated})
}

const getBooks= async function (req, res) {
    let books = await bookModel.find().populate('author publisher')
    res.send({data: books})
}


const hardCover = async function (req,res){
    let publisherId = await publisherModel.find({name : {$in:["Penguin","HarperCollins"]}})
    let temp = []
    for(let i = 0;i<publisherId.length;i++)
    {
       temp.push(publisherId[i]._id)
    }
    let books = await bookModel.updateMany({publisher:{$in:temp}},
        { $set: req.body},
        {$new:true}
        )


    res.send({data:books})
}

const updatePrice = async function (req,res){
let authorId = await authorModel.find(
    { ratings : { $gt : 3.5 } }  ).select( { _id:1 } )

let updatedPrice = await bookModel.updateMany( 
    
    { author : { $in : authorId } },
    { $inc : {price:+10} },
    { new : true}
     
    )
res.send(updatedPrice)

}

module.exports.createBook= createBook
module.exports.getBooks= getBooks
module.exports.hardCover= hardCover
module.exports.updatePrice= updatePrice





