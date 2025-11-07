const express = require('express');
const { log } = require('node:console');

const app = express();
const port = 8000;

app.get('/', function(req,res){
    res.end('/Home Page');
});

app.get('/contact-us', function(req, res) {
    res.end('You can contact on the email address');
});

app.get('/tweets', (req, res) => {
    res.end('Here are your tweets');
});

app.post('/tweets', (req, res) =>{
    res.status(201).end ('Tweet created successfully');
});

app.listen(port, () =>{
    console.log(`Server is running on port: ${port}`)
});
