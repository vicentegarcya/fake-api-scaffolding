const createError = require('http-errors');
const express = require('express');
const logger = require('morgan');
const path = require('path')

require('./config/hbs.config');

const app = express();

/**
 * Middlewares
 */
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(logger('dev'));

/**
 * View setup
 */
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

// Access to the public folder
app.use(express.static((__dirname, "..", "public")));

/**
 * Configure routes
 */
const router = require('./config/routes.config');
app.use('/', router);

app.use((req, res, next) => {
  next(createError(404, 'Page not found'));
});

app.use((error, req, res, next) => {
  console.error(error);
  let status = error.status || 500;

  res.status(status).render('error', {
    message: error.message,
    error: req.app.get('env') === 'development' ? error : {},
  });
});

const port = Number(process.env.PORT || 3000);

app.listen(port, () => {
  console.log(`Ready! Listening on port ${port}`);
});