// routes/auth.js
const express = require('express');
const bcrypt = require('bcrypt');
const router = express.Router();
const db = require('../db'); // Create a db.js file for MySQL connection

// User Registration
router.post('/signup', (req, res) => {
    const { name, email, password } = req.body;

    bcrypt.hash(password, 10, (err, hash) => {
        if (err) return res.status(500).send(err);

        const user = { name, email, password: hash };
        db.query('INSERT INTO users SET ?', user, (error) => {
            if (error) return res.status(500).send(error);
            res.status(201).send('User registered');
        });
    });
});

// User Login
router.post('/login', (req, res) => {
    const { email, password } = req.body;

    db.query('SELECT * FROM users WHERE email = ?', [email], (error, results) => {
        if (error) return res.status(500).send(error);
        if (results.length === 0) return res.status(401).send('User not found');

        bcrypt.compare(password, results[0].password, (err, isMatch) => {
            if (err) return res.status(500).send(err);
            if (!isMatch) return res.status(401).send('Incorrect password');
            res.send('Login successful');
        });
    });
});

module.exports = router;
