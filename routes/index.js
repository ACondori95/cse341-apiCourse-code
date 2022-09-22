const routes = require("express").Router();

routes.get("/", (req, res) => {
  res.send("Mili Ayarde");
});
// Todos los archivos en /contacts van a este archivo
routes.use("/contacts", require("./contacts"));

module.exports = routes;
