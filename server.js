const express = require('express');
const app = express();
const lesson1Controller = require('./controllers/lesson1');
 
app.get('/kathleen', lesson1Controller.kathleenRoute);
app.get('/angela', lesson1Controller.angelaRoute);

const port = 3000;
 
app.listen(process.env.port || port, () => {
  console.log('Web Server is listening at port ' + (process.env.PORT || 3000));
});
