const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('HOMEPAGE')
})

app.listen(3000);