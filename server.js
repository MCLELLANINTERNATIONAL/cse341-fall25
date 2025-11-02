const express = require('express');
const app = express();
const lession1Controllker = require('./controllers/lession1');
 
app.get('/', lession1Controller.kathleenRoute);
app.get('/angela', lession1Controller.angelaRoute);

const port = 3000;
 
app.listen(process.env.port || port, () => {
  console.log('Web Server is listening at port ' + (process.env.PORT || 3000));
});
