#! /usr/bin/env node
require('dotenv').config();

const { Client } = require("pg");

const SQL = `
CREATE TABLE IF NOT EXISTS records (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  artist VARCHAR ( 255 ),
  album VARCHAR ( 255 ),
  genre VARCHAR ( 255 ),
  year INTEGER,
  label VARCHAR ( 255 )
);

INSERT INTO records (artist, album, genre, year, label) 
VALUES
  ('Quasimoto', 'The Unseen', 'Hip Hop', 2000, 'Stones Throw'),
  ('Stevie Wonder', 'Innervisions', 'Soul', 1973, 'Tamla'),
  ('The Bill Evans Trio', 'Moon Beams', 'Jazz', 1962, 'Riverside Records'),
  ('The Headhunters', 'Survival of the Fittest', 'Funk', 1975, 'Arista'),
  ('Chick Corea', 'Inner Space', 'Jazz', 1973, 'Atlantic');
`;

async function main() {
  try {
    console.log('Seeding...');
    const client = new Client({
      connectionString: `postgresql://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`,
    });
    await client.connect();
    await client.query(SQL);
    await client.end();
    console.log('done');
  } catch(err) {
    console.error('Error during seeding:', err)
  }
}

main();