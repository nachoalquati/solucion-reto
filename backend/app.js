const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const session = require('express-session')
const { Sequelize } = require('sequelize');
const cors = require('cors');

const usersRouter = require('./routes/users');
const clientsRouter = require('./routes/clients');
const bussinesRouter = require('./routes/business');

const sequelize = new Sequelize('reparaciones', 'root', '', {
  host: 'localhost',
  dialect:'mysql'
});



const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');



app.use(session({
  name: 'reparaciones-session',
  resave: false,
  saveUninitialized: false,
  secret: 'th!s*1s*4*S3CR3T', 
  cookie:{
    maxAge: 1000 * 60 * 60 * 24 * 7,
    sameSite: false,
    secure: false // En producción se debe darle valor true.
  }
}))
app.use(cors({
  origin: 'http://localhost:4200', // Cambia esto por la URL de tu aplicación Angular
  credentials: true
}));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use('/users', usersRouter);
app.use('/clients', clientsRouter);
app.use('/admin', bussinesRouter);

// catch 404 and forward to error handlerconst cors = require('cors');
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
