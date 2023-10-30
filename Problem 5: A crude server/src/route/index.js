const express = require('express');
const controller = require('../controllers');

let router = express.Router();

let initRoutes = (app) => {
  router.get("/tasks/:id", controller.getTask);
  router.get("/tasks", controller.getTasks);
  router.post("/tasks", controller.addTask);
  router.put("/tasks/:id", controller.updateTask);
  router.delete("/tasks/:id", controller.deleteTask);

  return app.use('/', router);
}

module.exports = initRoutes;
