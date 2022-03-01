const express = require('express');
const router = express.Router();
const AuthorModel= require("../models/authorsModel.js")
const BookModel= require("../models/bookModel.js")
const BookController= require("../controllers/bookController")

// router.get("/test-me", function (req, res) {
//     res.send("My first ever api!")
// })

router.post("/createNewAuthor", BookController.createNewAuthor  )

router.post("/createNewBook", BookController.createNewBook)

router.get("/allBooks", BookController.allBooks  )

router.get("/updateBook", BookController.updateBook)

router.get("/findBookWithCost", BookController.findBookWithCost )

module.exports = router;