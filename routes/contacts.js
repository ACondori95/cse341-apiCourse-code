const controller = require("../controllers/contacts");
const routes = require("express").Router();

routes.get("/", controller.listContacts);

routes.get("/:id", controller);

module.exports = routes;
