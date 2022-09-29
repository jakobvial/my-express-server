const express = require('express');
const app = express();

//One route (a higher-order function: including a callback function)
app.get("/", function (req, res) {
    res.send("<h1>Hello world!</h1>");
});

//Another route
app.get("/contact", function (req, res) {
    res.send("Contact me at: jakobvial@outlook.com");
});

app.get("/hobbies", function (req, res) {
    res.send("<ul><li>Coffee</li><li>Code</li><li>Beer</li></ul>");

});

app.get("/bio", function (req, res) {
    res.send("I am Jakob, a rising web application development start :)");
});

app.listen(3000, function () {
    console.log("Server started on port 3000");
});

