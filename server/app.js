const express = require('express');
const mathHandlers = require('./handlers/math')


const app = express();

app.use(express.json());

app.post('/is-21-century', mathHandlers.is21Century);
app.post('/is-weekend', mathHandlers.isWeekend);
app.post('/is-leap-year', mathHandlers.isLeapYear);


app.use(errorHandler);
app.use('*', (req, res, next) => {
    res.status(404).json({ error: `unknown route` });
});


module.exports = app;