const express = require('express');
// const mongoose = require('mongoose');
const morgan = require('morgan');
// const path = require('path');
// const bodyParser = require('body-parser');

const app = express();

const PORT = process.env.PORT || 8080;

app.use(morgan('tiny'));


app.get("/", (req,res) => {
    res.send("Hello World");
});

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
});

