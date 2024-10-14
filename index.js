require('dotenv').config();
const express = require('express');
const app = express();
const indexRouter = require('./routes/indexRouter');
const path = require("node:path");

app.use(express.urlencoded({ extended: true }));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use('/', indexRouter);

const port = process.env.PORT || 3030;
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});