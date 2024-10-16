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
};

async function sortByArtistQuery() {
  console.log('running queries sortByArtistQuery');
  const { rows } = await pool.query('SELECT * FROM records ORDER BY artist ASC');
  return rows;
};

async function sortByAlbumQuery() {
  console.log('running queries sortByAlbumQuery');
  const { rows } = await pool.query('SELECT * FROM records ORDER BY album ASC');
  return rows;
};

async function sortByGenreQuery() {
  console.log('running queries sortByAlbumQuery');
  const { rows } = await pool.query('SELECT * FROM records ORDER BY genre ASC');
  return rows;
};

async function sortByYearQuery() {
  console.log('running queries sortByYearQuery');
  const { rows } = await pool.query('SELECT * FROM records ORDER BY year ASC');
  return rows;
};

async function sortByLabelQuery() {
  console.log('running queries sortByLabelQuery');
  const { rows } = await pool.query('SELECT * FROM records ORDER BY label ASC');
  return rows;
};

module.exports = {
  getRecordsQuery,
  addRecordQuery,
  deleteRecordQuery,
  sortByArtistQuery,
  sortByAlbumQuery,
  sortByGenreQuery,
  sortByYearQuery,
  sortByLabelQuery
}