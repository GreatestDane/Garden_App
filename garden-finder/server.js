const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const db = require("./public/data/db/index.js")

const app = express();

const PORT = process.env.PORT || 3001;


app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors);
app.use(bodyParser.json());

app.use(express.static(__dirname + "/public"))

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

app.get('/', (req, res) => {
    res.send('HELLO WORLD');
});

app.listen(PORT, () => {
    console.log(`App is running on port ${PORT}`);
});