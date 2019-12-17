const express = require('express');
const bodyParser = require('body-parser')

const app = express();

app.use(bodyParser.json())

app.get('/', (req, res, next) => {
    res.status(200).send('Working API')
})
app.listen(3000);