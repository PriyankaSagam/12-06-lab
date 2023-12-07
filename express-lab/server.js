const express = require('express');
const app = express();
const port = 3000;

//Make a route '/greeting'that sends a generic greeting to the screen like"Hello, stranger".

app.get('/greeting', function (req, res) {
    res.send('<h1>Hello Stranger<h1>');
});

//Give the greetingroute a param /:name
// //When hitting the route, the page should display a message such as
// //"Hello, ", or "What's up, <name>", or "<name>! It's so great to see you!
//"(ex.hitting '/greeting/Jimmy-boy'should display Wow! Hello there, Jimmy - boyon the page).

app.get('/greeting/:name', function (req, res) {
    res.send('Hello'+' '+ 'Great to see you!'+ ' '+req.params.name);
});

app.listen(port, () => {
    console.log('listening on port',port)
})