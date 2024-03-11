const express = require('express');
const bodyParser = require('body-parser');
const Person = require('../models/personModel');  // Import the Person model

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Define a route to handle POST requests to '/person'
app.post('/person', function (req, res) {
    // Create a new Person object with data from the request body
    const newPerson = new Person({
        name: req.body.name,
        age: req.body.age,
        nationality: req.body.nationality
    });

    // Save the new person to the database
    console.log('Saving: ', newPerson);

    newPerson.save()
        .then((savedPerson) => {
            console.log('Saved person: ', savedPerson);
            res.send('Person saved to the database');
        })
        .catch(err => {
            console.error(err);
            res.status(400).send('Unable to save to database');
        });
});

module.exports = app;