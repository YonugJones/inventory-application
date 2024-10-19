const db = require('../db/queries');

async function getRecords(req, res) {
  try {
    const records = await db.getRecordsQuery();
    res.render('index', { title: 'Stax of Wax', records });
  } catch (err) {
    console.error('Error fetching data:', err);
    res.status(500).send(records);
    
  }
};

async function addRecord(req, res) {
  try {
    const { artist, album, genre, year, label } = req.body;
    await db.addRecordQuery(artist, album, genre, year, label);
    res.redirect('/');
  } catch (err) {
    console.error('Error adding record to database:', err);
    res.status(500).send('Internal server error')
  }
};

async function deleteRecord(req, res) {
  try {
    const { id } = req.body;
    await db.deleteRecordQuery(id);
    res.redirect('/');
  } catch (err) {
    console.err('Error deleting record from database:', err);
    res.status(500).send('Internal server error')
  }
};

async function sortByArtist(req, res) {
  try {
    const records = await db.sortByArtistQuery();
    res.render('index', { title: 'Stax of Wax', records });
  } catch (err) {
    console.error('Error fetching data:', err);
    res.status(500).send('Internal server error');
  }
};

async function sortByAlbum(req, res) {
  try {
    const records = await db.sortByAlbumQuery();
    res.render('index', { title: 'Stax of Wax', records });
  } catch (err) {
    console.error('Error fetching data:', err);
    res.status(500).send('Internal server error');
  }
};

async function sortByGenre(req, res) {
  try {
    const records = await db.sortByGenreQuery();
    res.render('index', { title: 'Stax of Wax', records });
  } catch (err) {
    console.error('Error fetching data:', err);
    res.status(500).send('Internal server error');
  }
};

async function sortByYear(req, res) {
  try {
    const records = await db.sortByYearQuery();
    res.render('index', { title: 'Stax of Wax', records });
  } catch (err) {
    console.error('Error fetching data:', err);
    res.status(500).send('Internal server error');
  }
};

async function sortByLabel(req, res) {
  try {
    const records = await db.sortByLabelQuery();
    res.render('index', { title: 'Stax of Wax', records });
  } catch (err) {
    console.error('Error fetching data:', err);
    res.status(500).send('Internal server error');
  }
};

module.exports = {
  getRecords,
  addRecord,
  deleteRecord,
  sortByArtist,
  sortByAlbum,
  sortByGenre,
  sortByYear,
  sortByLabel
}