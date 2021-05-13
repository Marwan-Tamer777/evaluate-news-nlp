var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')
var bodyParser = require('body-parser')
var cors = require('cors')
const { url } = require('inspector')
var fetch = require("node-fetch");
require('dotenv').config()
var FormData = require('form-data');
require('fs');
const axios = require('axios')


const app = express()
app.use(express.static('dist'))
app.use(cors())
// to use json
app.use(bodyParser.json())
// to use url encoded values
app.use(bodyParser.urlencoded({
  extended: true
}))

const endPoint = 'https://api.meaningcloud.com/sentiment-2.1';
console.log(__dirname)

app.get('/', function (req, res) {
    // res.sendFile('dist/index.html')
    res.sendFile(path.resolve('src/client/views/index.html'))
})



// designates what port the app will listen to for incoming requests
app.listen(3000, function () {
    console.log('Example app listening on port 3000!')
})

//sends a mock response to test the server
app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})

//sends the APIKEY which is a hidden environment variable
app.get('/API',function(req, res){
    res.send({ API: process.env.API_KEY })
})

//makes a call to the meaningcloud API
app.post('/callAPI', callAPI)

async function callAPI(req,res){
    console.log(req.body)

    /*   axios
  .post(endPoint, req.body)
  .then(res => {
    console.log(`statusCode: ${res.statusCode}`)
    console.log(res)
  })
  .catch(error => {
    console.error(error)
  })*/
  

    const response = await fetch(endPoint, req.body)
   .then(response => ({
    status: response.status, 
    body: response.json()
  }))
  .then(async ({ status, body }) => {console.log(await status,await body); res.send(await body); })
  .catch(error => console.log('error', error))
}
