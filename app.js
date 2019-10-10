const express = require('express');
const app = express();
const apiRouter = require('./routers/api-router');
const {
  handleCustomErrors,
  handlePSQLErrors,
  handleServerErrors
} = require('./error-handlers');

app.use(express.json());

app.use('/api', apiRouter);

app.use('/*', (req, res, next) => {
  res.status(404).send({ msg: 'bad path' });
});

app.use(handleCustomErrors, handlePSQLErrors, handleServerErrors);

module.exports = app;