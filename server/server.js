require('dotenv').config()

const express = require('express');
const morgan = require('morgan');
const app = express();
const axios = require('axios');


app.use(morgan('dev'));
app.use(express.static('dist'));
app.use(express.static('public'));

app.get('/api/:search', (req, res) => {
    axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${req.params.search.replace('.', '')}${process.env.WEATHER_API_KEY}`)
    .then(response => {
        console.log('Success: ', response.data);
        res.send(response.data)
    })
    .catch((err) => {
        console.log('Error: ', err);
        res.send(err)
    })
});

module.exports = app;
