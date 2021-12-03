const express = require('express');
const axios = require('axios');

const app = express();
const PORT = 3000;

app.use(express.static('client/public'));

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
})

module.export = app;