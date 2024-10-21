require('dotenv').config();
const express = require('express');
const app = express();
const indexRouter = require('./routes/indexRouter');
const newRouter = require('./routes/newRouter');
const sortRouter = require('./routes/sortRouter');
const path = require("node:path");

app.use(express.urlencoded({ extended: true }));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/new', newRouter);
app.use('/sort', sortRouter);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});