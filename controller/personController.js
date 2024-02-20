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
    newPerson.save()
        .then(() => {
            console.log('Person saved to the database');
            // Send a response indicating success
            res.send('Person saved to the database');
        })
        .catch(err => {
            // Log any errors that occur
            console.error(err);
            // Send an error response with status code 400
            res.status(400).send('Unable to save to database');
        });
});

module.exports = app;
