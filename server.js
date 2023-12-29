const express = require('express');

const app = express();
const PORT = 8000;


// Middleware to parse JSON requests
app.use(express.json());


let users = [
    {
        "id": 1,
        "name": "John",
        "age": 16,
    },
    {
        id: 2,
        "name": "Mc",
        "age": 21,
    }
];


app.get('/', function (req, res) {
    res.send("Welcome 🔴");
});

app.get('/users', function (req, res) {
    res.json(users);
});

app.post('/register-user', function (req, res) {

    const newUser = {
        id: users.length + 1,
        name: req.body.name,
        age: req.body.age,
    };

    users.push(newUser);

    res.status(201).json(users);

});


app.get('/test', function (req, res) {

    res.send("hey man 🧡 isbcerl");

});


app.delete('/delete-user/:id', function (req, res) {

    const deleteUser = req.params.id;

    // ! =
    users = users.filter((user) => user.id != deleteUser);

    res.json(users);

});





app.listen(PORT, function () {
    console.log(`app listening on port ${PORT}`);
});