const express = require('express');

const app = express();

module.exports = app;

var homeRouter = require('./routes/home')
app.use('/', homeRouter);

var getRouter = require('./routes/get');
app.use('/get', getRouter);

app.listen(process.env.PORT || 5000, () => {
    console.log('Server is running...')
})