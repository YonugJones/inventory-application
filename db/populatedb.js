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
  ('Sade', 'Promise', 'Funk/Soul, Pop', 1985, 'Portrait'),
  ('Ahmad Jamal', 'Intervals', 'Jazz, Funk/Soul', 1980, '20th Century Fox Records'),
  ('Missy Eliott', 'Supa Dupa Fly', 'Hip Hop', 1997, 'East West'),
  ('Anita Baker', 'Rapture', 'Jazz, Funk/Soul', 1986, 'Elektra'),
  ('Blu & Exile', 'Give Me My Flowers While I Can Still Smell Them', 'Hip Hop', 2012, 'Fat Beats'),
  ('Quasimoto', 'The Unseen', 'Hip Hop', 2000, 'Stones Throw'),
  ('Stevie Wonder', 'Innervisions', 'Soul', 1973, 'Tamla'),
  ('The Bill Evans Trio', 'Moon Beams', 'Jazz', 1962, 'Riverside Records'),
  ('The Headhunters', 'Survival of the Fittest', 'Funk', 1975, 'Arista'),
  ('Chick Corea', 'Inner Space', 'Jazz', 1973, 'Atlantic'),
  ('Isaac Hayes', 'Hot Buttere Soul', 'Funk', 1969, 'Enterprise'),
  ('John Coltrane', 'A Love Supreme: The Complete Masters', 'Jazz', 2016, 'Impulse!'),
  ('Johnny McLaughlin', 'Electric Guitarist', 'Jazz', 1978, 'Columbia'),
  ('Knxwledge', 'Hud Dreams', 'Hip Hop', 2015, 'Stones Throw'),
  ('Marvin Gaye', 'I Want You', 'Funk/Soul', 1976, 'Tamla'),
  ('Ohio Players', 'Fire', 'Funk/Soul', 1974, 'Mercury'),
  ('Roy Ayers Ubiquity', 'Lifeline', 'Jazz, Funk/Soul', 1977, 'Polydor'),
  ('Wayne Shorter', 'Juju', 'Jazz', 2014, 'Blue Note'),
  ('Tuamie', 'Holy Ghost Spirituals', 'Hip Hop', 2017, 'Street Corner Music'),
  ('U Roy', 'Version Galore', 'Reggae', 1971, 'Treasure Isle');
`;

async function main() {
  try {
    console.log('Seeding...');
    const client = new Client({
      connectionString: process.env.DB_URL,
      ssl: {
        rejectUnauthorized: false
      }
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