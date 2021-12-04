const express = require('express');
const axios = require('axios');
const weather = require('./routes/weatherApi.js');

const app = express();
const PORT = 3000;

app.use(express.static('client/public'));
app.use(express.json());

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
})

app.get('/weather', (req, res) => {
  console.log('server/index.js received get request')
  console.log(req.query.zip);
  weather.getWeather(req.query.zip)
      .then((data) => {
          console.log('here i am', res);
          res.status(200).send(data.data);
      })
      .catch((err) => {
        console.log(err)
          res.status(404).send(err);
      })
})


module.export = app;