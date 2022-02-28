const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema( {
    bookName: String, 
    authorName: String, 
    year:Number,
    tags: [String],
    totalPages :Number,
    stockAvailable :Boolean,

    prices: {
        indianPrice: String,
        europePrice: String,
    },
    
}, { timestamps: true });


module.exports = mongoose.model('Book', bookSchema) 

