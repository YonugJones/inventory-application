const { Router } = require('express');
const controller = require('../controllers/recordController')
const newRouter = Router();

newRouter.get('/', (req, res) => {
  res.render('newRecordForm');
});

newRouter.post('/', (req, res) => {
  controller.addRecord(req, res)
});

module.exports = newRouter;