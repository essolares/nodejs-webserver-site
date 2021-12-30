const express = require('express')
const hbs = require('hbs');
require('dotenv').config();
const app = express();
const port = process.env.PORT;

//HANDLEBARS
app.set('view engine','hbs');
hbs.registerPartials(__dirname + '/views/partials', function (err) {});

//SERVE STATIC CONTENT
app.use(express.static('public'));

/*
app.get('/elements',  (req, res) => {
    res.sendFile(__dirname + '/public/elements.html');
})

app.get('/generic',  (req, res) => {
    res.sendFile(__dirname + '/public/generic.html');
})

app.get('*', (req, res) => {
    res.sendFile(__dirname + '/public/404.html');
})
*/

//HBS
app.get('/',  (req, res) => {
    res.render('home', {
        name: "Edgar Salazar",
        title: "NodeJS"
    });
});

app.get('/elements',  (req, res) => {
    res.render('elements', {
        name: "Edgar Salazar",
        title: "NodeJS"
    });
})

app.get('/generic',  (req, res) => {
    res.render('generic', {
        name: "Edgar Salazar",
        title: "NodeJS"
    });
})

app.listen(port, ()=>{
    console.log('Running on port:', port);
});