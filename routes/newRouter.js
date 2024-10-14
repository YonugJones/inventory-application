const { Router } = require('express');
const newRouter = Router();

newRouter.get('/', (req, res) => {
  res.render('newRecordForm');
})

module.exports = newRouter;