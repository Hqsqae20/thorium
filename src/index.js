const express = require('express');
const bodyParser = require('body-parser');
const route = require('./routes/route.js');
const { default: mongoose } = require('mongoose');
const app = express();

const globalMiddleware=require('../src/middleware/global')
app.use(globalMiddleware.GB)

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


mongoose.connect("mongodb+srv://sapna20:Sapnadha20@cluster0.crepr.mongodb.net/sapna-db?retryWrites=true&w=majority", {
    useNewUrlParser: true
})
.then( () => console.log("MongoDb is connected"))
.catch ( err => console.log(err) )

app.use('/', route);



app.listen(process.env.PORT || 3000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});
