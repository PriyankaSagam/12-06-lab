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
//Tip Calculator=============
//Your app should have a route of '/tip'and it should expect 2 params.
// One should be total and one should be tipPercentage.
//When hitting the route, the page should display how much your tip will be based on the total amount of the bill and the tip percentage. 
//(ex.hitting '/tip/100/20'should display 20on the page)
app.get('/tip/:total/:tipPercentage', function (req, res) {
    console.log(req.params)
    res.send("the tip is " + parseInt((req.params.tipPercentage / 100) * req.params.total))
});




app.listen(port, () => {
    console.log('listening on port', port)
});