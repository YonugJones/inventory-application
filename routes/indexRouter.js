const { Router } = require('express');
const controller = require('../controllers/recordController');
const indexRouter = Router();

indexRouter.get('/', controller.getRecords);
indexRouter.post('/delete', controller.deleteRecord);

module.exports = indexRouter;