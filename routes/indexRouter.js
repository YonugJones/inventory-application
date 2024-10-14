const { Router } = require('express');
const indexRouter = Router();

indexRouter.get('/', (req, res) => {
  res.send('HOMEPAGE')
});

module.exports = indexRouter;