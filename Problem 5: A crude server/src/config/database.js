module.exports = {
  SQLite: {
    connectionString: process.env.SQLITE_CONNECTION_STRING || './db.sqlite3',
  },
}