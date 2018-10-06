require('./config/config');

const bodyParser = require('body-parser');
const express = require('express');
const mongoose = require('mongoose');

const app = express();


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
app.use(require('./routes/usuario'));

// parse application/json
app.use(bodyParser.json())



mongoose.connect(process.env.URLDB, (err, res) => {
    if (err) throw err

    console.log('Base de datos: ONLINE');

});

app.listen(process.env.PORT, () => {
    console.log('Escuchando puerto: ', process.env.PORT);
});