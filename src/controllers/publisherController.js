const publisherModel = require("../models/publisherModel")

const createPublisher = async function(req,res){
    let publisher = req.body
    let publishCreated = await publisherModel.create(publisher)
    res.send({data: publishCreated})
}


module.exports.createPublisher= createPublisher
