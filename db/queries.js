const pool = require('./pool');

async function getRecordsQuery() {
  console.log('running queries getRecordsQuery');
  const { rows } = await pool.query('SELECT * FROM records');
  return rows;
};

async function addRecordQuery(artist, album, genre, year, label) {
  console.log('running queries addRecordQuery');
  await pool.query(
    'INSERT INTO records (artist, album, genre, year, label) VALUES ($1, $2, $3, $4, $5)', 
    [artist, album, genre, year, label]
  );
  console.log('Record inserted succesfully');
};

async function deleteRecordQuery(id) {
  console.log('running queries deleteRecordQuery');
  await pool.query('DELETE FROM records WHERE id = $1', [id]);
  console.log('Record deleted succesfully');
}

module.exports = {
  getRecordsQuery,
  addRecordQuery,
  deleteRecordQuery
}