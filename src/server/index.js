// Setup empty JS object to act as endpoint for all routes
projectData = {};

const path = require('path');
const mockAPIResponse = require('./mockAPI.js');

// Express to run server and routes
const express = require('express');

// Environment variables
const dotenv = require('dotenv');
dotenv.config();
console.log(`Your API key is ${process.env.API_KEY}`);

// Start up an istance of an app
const app = express();

// Dependencies 
const bodyParser = require('body-parser');
const fetch = require('node-fetch');

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());

// Initialize the main project folder
app.use(express.static('dist'));

// Meaning Cloud API
const meaningCloud = require('meaning-cloud');
const { response } = require('express');
const baseURL = 'https://api.meaningcloud.com/sentiment-2.1';
const apiHolder = '?key=';
const apiParam = '&of=json&txt=';
const apiKey = process.env.API_KEY;

console.log(__dirname);

// GET route
app.get('/', function (req, res) {
    res.sendFile('dist/index.html');
    // res.sendFile(path.resolve('src/client/views/index.html'))
});

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('App listening on port 8081!');
});

app.get('/test', function (req, res) {
    res.send(mockAPIResponse);
});

// POST route
app.post('/addSentimentAnalysis', addAnalysis);

async function addAnalysis (req, res) {
    projectData = req.body.input.url;
    console.log("User input: ", projectData);
    const requestData = await fetch (baseURL + apiHolder + apiParam + apiKey + projectData)
    .then((requestData) => requestData.json())
    .then(data => {
        res.send(data);
    })
    .catch((error) => {
        console.log("Error: ", error);
    });
}