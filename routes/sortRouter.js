const { Router } = require('express');
const controller = require('../controllers/recordController');
const sortRouter = Router();

sortRouter.get('/artist', controller.sortByArtist);
sortRouter.get('/album', controller.sortByAlbum);
sortRouter.get('/genre', controller.sortByGenre);
sortRouter.get('/year', controller.sortByYear);
sortRouter.get('/label', controller.sortByLabel);

module.exports = sortRouter;