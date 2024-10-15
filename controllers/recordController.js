const db = require('../db/queries');

async function getRecords(req, res) {
  try {
    const records = await db.getRecordsQuery();
    res.render('index', { title: 'My Record Collection', records });
  } catch (err) {
    console.error('Error fetching data:', err);
    res.status(500).send('Internal server error');
  }
};

async function addRecord(req, res) {
  try {
    const { artist, album, genre, year, label } = req.body;
    console.log(artist, album, genre, year, label);
    await db.addRecordQuery(artist, album, genre, year, label);
    res.redirect('/');
  } catch (err) {
    console.error('Error adding record to database:', err);
    res.status()
  }
}

module.exports = {
  getRecords,
  addRecord
}