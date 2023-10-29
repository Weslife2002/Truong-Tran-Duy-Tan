const database = require('./database');
const viewEngine = require('./viewEngine');
const container = require('./container');

module.exports = {
  ...container,
  ...database,
  viewEngine,
}