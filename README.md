# Evaluate a news article with Natural Language Processing
This project requires the creation of a web tool that allows users to run Natural Language Processing (NLP) on articles or blogs found on other websites. NLP is the ability of an application to understand the human language, written or oral.
> Natural language processing (NLP) is a subfield of computer science, information engineering, and artificial intelligence concerned with the interactions between computers and human (natural) languages, in particular how to program computers to process and analyze large amounts of natural language data.

The goal of this project is:
- Setting up Webpack
- Sass styles
- Webpack Loaders and Plugins
- Creating layouts and page design
- Service workers
- Using APIs and creating requests to external urls

## Node.js and express
The server is set up using ```express``` and Node is used to install all the dependencies with ```npm```.

## Webpack
This project uses Webpack as the build tool. The configuration can be found on the repository. There are different setups for production and development environments.

## API
The API used to interpret the articles is.

### Environment Variables
Need to declare our API key, which will look something like this:
```
let apiKey = process.env.API_KEY;
```
- Use npm to install the dotenv package ```npm install dotenv```. This will allow us to use environment variables we set in a new file.
- Create a new ```.env``` file in the root of your project
- Fill the .env file with your API keys like this:
```
API_KEY=**************************
```
## Jest
The code is tested using [Jest](https://jestjs.io/). Find in directory "__test__".

## Service Workers
Using Google [Workbox](https://developers.google.com/web/tools/workbox) for "Offline Functionality".

## Get Up and Running

`cd` into your new folder and run:
- ```npm install```
- ```npm run build-dev``` to start the webpack dev server
- ```npm run build-prod``` to generate a dist folder for prod
- ```npm start``` to run the Express server on port 8081
