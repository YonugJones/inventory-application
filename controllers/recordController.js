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

module.exports = {
  getRecords
}