const express = require('express');
const app = express();
const port = 3000;

const magic8Ball = ["It is certain", "It is decidedly so", "Without a doubt",
    "Yes definitely", "You may rely on it", "As I see it yes", "Most likely",
    "Outlook good", "Yes", "Signs point to yes", "Reply hazy try again",
    "Ask again later", "Better not tell you now", "Cannot predict now",
    "Concentrate and ask again", "Don't count on it", "My reply is no",
    "My sources say no", "Outlook not so good", "Very doubtful"]

    const randomAnswer = magic8Ball[Math.floor(Math.random() * magic8Ball.length)]

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

//Magic 8 Ball===========
//Create a route of '/magic'that should expect a phrase in the URL
//that ask the Magic 8 ball a question.

//So if the user hits that route and asks a question of
//"Will I be a Millionaire"(ex. '/magic/Will%20I%20Be%20A%20Millionaire')
//he should have return to him his question AND a random Magic 8 ball response(see the array below) on the screen.

//We can't use spaces in the url, so we use %20to express a space in the url.

//So if the user hits that route and asks a question of "Will I be a Millionaire" he should get his
// question asked and a random Magic 8 ball quote on the screen.

//Send the magic 8 ball response back between html <h1>tags

// Use this array of Magic 8 ball responses....

app.get('/magic/:id', (req, res) => {
    console.log(req.params)
   res.send(`<h1>${randomAnswer}</h1>`  + req.params.id + '?')
})



app.listen(port, () => {
    console.log('listening on port', port)
});