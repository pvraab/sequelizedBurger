var db = require("../models");

module.exports = function(app) {

  // Create all our routes and set up logic within those routes where required.

  // Get all burgers
  app.get("/api/burgers", function(req, res) {
    db.burgers.findAll({}).then(function(dbBurgers) {
      res.json(dbBurgers);
    });
  });

  // Get a burger by id
  app.get("/api/burgers/:id", function(req, res) {
    db.burgers
      .findOne({
        where: {
          id: req.params.id
        }
      })
      .then(function(dbBurgers) {
        res.json(dbBurgers);
      });
  });

  // Create a new burger
  app.post("/api/burgers", function(req, res) {
    db.burgers
      .create(req.body)
      .then(function(dbBurgers) {
        res.json(dbBurgers);
      })
      .catch(function(err) {
        // Whenever a validation or flag fails, an error is thrown
        // We can "catch" the error to prevent it from being "thrown", which could crash our node app
        res.json(err);
      });
  });

  // PUT route for updating burgers
  app.put("/api/burgers/:id", function(req, res) {
    db.burgers
      .update(req.body, {
        where: {
          id: req.params.id
        }
      })
      .then(function(dbBurgers) {
        res.json(dbBurgers);
      });
  });

  // Delete an burger by id
  app.delete("/api/burgers/:id", function(req, res) {
    db.burgers
      .destroy({ where: { id: req.params.id } })
      .then(function(dbBurgers) {
        res.json(dbBurgers);
      });
  });
};
