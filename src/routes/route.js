const express = require('express');
const router = express.Router();

const authorController= require("../controllers/authorController")
const bookController= require("../controllers/bookController")
const publishController =require("../controllers/publisherController")


router.post("/createAuthor", authorController.createAuthor  )

router.post("/createPublisher", publishController.createPublisher)

router.post("/createBook", bookController.createBook  )

router.get("/getBooks", bookController.getBooks  )

router.put("/hardCover", bookController.hardCover  )

router.put("/updatePrice", bookController.updatePrice  )

module.exports = router;