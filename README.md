# Evaluate News Article with Natural Language Processing (NLP)

## Udacity Front end Nanodegree: Project 4

## HTML5, CSS3, JavaScript, Build tool: Webpack

## Overview
This project is about using webapack, node.js, express.js to build a web tool that allows users to run Natural Language Processing (NLP) on articles or blogs found on other websites. The (NLP) is provided by external API - 
Meaning Cloud to analyse the sentiment of some text.

## Project
The project can be run in both development mode and in production mode.

- Install all node packages from `package.json`:

` $ npm install`

- Start server at port 8081:

` $ npm run start`

This enables us to do a post route to the API.

- Run in development mode:

` $ npm run build-dev`

This first command will start the webpack dev server at port 8080. 

- Run in production mode:

` $ npm run build-prod`

The first command generates the dist files. 

- Configurations:

The project contains a `package.json` file, two webpack config files `webpack.config.dev.js` and `webpack.config.prod.js` for development and production mode.

- Content:
The project has only one html file located in the `src/views/` folder. The html file is styled using sass. The files are located in the `src/client/styles ` folder.

- API:
The project receives an input url from the html file and passes it to the function `handleSubmit` from the  file `formHandler.js` which calls the function `validateURL` from file `validateURL.js` to check that it is a valid url. 
Then a fetch is done to `http://localhost:8081/addSentimentAnalysis` which then makes a post request to the api via `app.post('/addSentimentAnalysis', addAnalysis);`

The information gotten from the API call is going to be displayed on the html page.

- Offline Functionality:
The project have service workers set up in webpack. 

- Testing with Jest:

 `npm run test`

- Interactions:
The page has a form with a single field that receives an input. This input is checked for a valid url. An error message is displayed if the input is invalid. If the url is valid, then an API call is performed and the result is 
displayed on the page.
