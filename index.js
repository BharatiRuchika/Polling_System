// Import required modules
const express = require("express");
const cors = require('cors');
const app = express();

// Enable Cross-Origin Resource Sharing (CORS)
app.use(cors());
const port = 8000;
const mongoose = require('mongoose')
const expressLayouts = require("express-ejs-layouts");
const db = require("./config/mongoose");
app.use(express.static('./assets'))
const bodyParser = require('body-parser');

// Set up middleware for parsing JSON and URL-encoded data
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(expressLayouts);
app.set('layout extractStyles',true)
app.set('layout extractScripts',true)
app.set('view engine','ejs')
app.set('views','./views')

// Set up a basic route for the main application, using the "routes" module
app.use("/",require("./routes"))

// Set up the server to listen on the specified port
app.listen(port,function(err){
    if(err){
        console.log(`Error:${err}`)
    }
    console.log(`server is running on port ${port}`)
})
