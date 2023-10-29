const sqlite3 = require('sqlite3').verbose();
const { SQLite } = require('../../config');

const SQLiteDB = new sqlite3.Database(SQLite.connectionString);

SQLiteDB.run(`
CREATE TABLE IF NOT EXISTS tasks (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  title CHAR(200) NOT NULL,
  description CHAR(500)
)
`)

module.exports = {
  SQLiteDB,
}