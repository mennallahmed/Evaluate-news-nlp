const dotenv = require('dotenv');
dotenv.config();
var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')
const app = express()
const bodyParser = require('body-parser');
/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());
// Setup empty JS object
dataObject = {}

// MeaningCloud API Key
let apiKey = process.env.API_KEY;

app.use(express.static('dist'))

console.log(__dirname)

app.get('/', function (req, res) {
    // res.sendFile('dist/index.html')
    res.sendFile(path.resolve('dist/index.html'))
})

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
})

app.get('/test', function (req, res) {
    res.setHeader("Access-Control-Allow-Origin","*")
    res.send(mockAPIResponse)
})

// Get Api key
app.get('/api', (req, res) => {
    res.send({ key: apiKey });
  });
// Respond with JS object
app.get('/all', function (req, res) {
    res.send(dataObject)
  })

//post data   
app.post('/addText', (req, res) => {
    (dataObject["agreement"] = req.body.agreement),
      (dataObject["subjectivity"] = req.body.subjectivity),
      (dataObject["confidence"] = req.body.confidence),
      (dataObject["irony"] = req.body.irony);
  
    res.send(dataObject);
  });
console.log(`Your API key is ${process.env.API_KEY}`);
