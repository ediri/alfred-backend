const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const indexRouter = require('./routes/index');
const apiRouter = require('./routes/api');
const calendarRouter = require('./routes/calendar');
const calendars = require('./backend/calendar');

const app = express();

app.locals.calendars=calendars;
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.set('view engine', 'pug');


//app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/api/v1.0', apiRouter);
app.use('/calendar',calendarRouter);

module.exports = app;
