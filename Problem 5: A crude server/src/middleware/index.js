const { viewEngine } = require("../config");
const initRoutes = require("../route");
const bodyParser = require("body-parser");

async function configMiddleware(app) {  
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({extended: true}));

  viewEngine(app);
  initRoutes(app);
}

module.exports = configMiddleware;