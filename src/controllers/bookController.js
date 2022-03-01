//const { count } = require("console")
//const bodyParser = require('body-parser');
const aModel = require("../models/authorsModel")
const bookModel = require("../models/bookModel")

const createNewAuthor = async (req, res) => {
    let Author = req.body
    let savedData = await aModel.create(Author)
    res.send({ msg: savedData })
}


const createNewBook = async (req, res) => {
    let book = req.body
    let savedData = await bookModel.create(book)
    res.send({ msg: savedData })
}

const allBooks = async (req, res) => {
    let authorDetail=await aModel.find({author_name: "Chetan Bhagat"})
    let id= authorDetail[0].author_id
    let booksname=await bookModel.find({author_id:id}).select({name:1})
    res.send({ msg: booksname })
}



const updateBook = async function(req,res){
    let updatedBook = await bookModel.findOneAndUpdate(
        { name: "Two States"},
        { $set: {price : "100" } },
        { new: true , upsert : true }
    )

    let identity = await bookModel.find( { name :"Two states" } ).select({ author_id:1 })

    let authorName = await aModel.findOne( { identity } ).select( { author_name:1 , _id:0} )

    res.send([{author : authorName},{updatedData : updatedBook}])
}



const findBookWithCost = async function (req, res) {

    let booksWithCost = await bookModel.find({ price: { $gte: 50, $lte: 100 } }).select({ author_id: 1, _id: 0 });
    let newArr = booksWithCost.map(ele => ele.author_id).flat()
    newArr.pop()


    let removeDup = [...new Set(newArr)]

    let newData = []

    for (let i = 0; i < removeDup.length; i++) {
        newData.push(await aModel.find({ author_Id: removeDup[i] }).select({ author_name: 1 }))
    }
    res.send(newData)

}


module.exports.createNewAuthor = createNewAuthor
module.exports.createNewBook = createNewBook
module.exports.allBooks = allBooks
module.exports.updateBook = updateBook
module.exports.findBookWithCost = findBookWithCost



