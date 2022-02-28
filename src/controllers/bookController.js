const { count } = require("console")
const BookModel= require("../models/bookModel")

const createBook= async function (req, res) {
    let data= req.body

    let savedData= await BookModel.create(data)
    res.send({msg: savedData})
}


const bookList= async function (req, res) {

    let allBooks= await BookModel.find({},{bookName:1,authorName:1,_id:0} )

    res.send({msg: allBooks})
}


const getBooksInYear= async function (req, res){
    let year=req.body
    let bookyr=await BookModel.find(year)

    res.send({msg: bookyr})


}

const getParticularBooks= async function (req, res){
    let body=req.body
    let particularBooks=await BookModel.find(body)
    res.send({msg: particularBooks})

}


const getXINRBooks= async function (req, res){
    let allBooks= await BookModel.find( ) 
         res.send({msg: allBooks})
        }


   const getRandomBooks = async function (req, res) {
    let randomBooks = await BookModel.find({ $or: [ {stockAvailable : true } , { totalPages:{$gt:500} } ]})
    res.send({ msg: randomBooks })
}


        
        



    

module.exports.createBook= createBook
module.exports.bookList= bookList
module.exports.getBooksInYear= getBooksInYear
module.exports.getParticularBooks = getParticularBooks 
module.exports.getXINRBooks= getXINRBooks
module.exports.getRandomBooks = getRandomBooks 