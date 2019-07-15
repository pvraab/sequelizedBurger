var db = require("../models");

module.exports = function(app) {
  // Get all customers
  app.get("/api/customers", function(req, res) {
    db.customers.findAll({}).then(function(dbCustomers) {
      res.json(dbCustomers);
    });
  });

  // Get a customer by id
  app.get("/api/customers/:id", function(req, res) {
    db.customers
      .findOne({
        where: {
          id: req.params.id
        }
      })
      .then(function(dbCustomers) {
        res.json(dbCustomers);
      });
  });

  // Create a new customer
  app.post("/api/customers", function(req, res) {
    db.customers
      .create(req.body)
      .then(function(dbCustomers) {
        res.json(dbCustomers);
      })
      .catch(function(err) {
        // Whenever a validation or flag fails, an error is thrown
        // We can "catch" the error to prevent it from being "thrown", which could crash our node app
        res.json(err);
      });
  });

  // PUT route for updating customers
  app.put("/api/customers", function(req, res) {
    db.customers
      .update(req.body, {
        where: {
          id: req.body.id
        }
      })
      .then(function(dbCustomers) {
        res.json(dbCustomers);
      });
  });

  // Delete an customer by id
  app.delete("/api/customers/:id", function(req, res) {
    db.customers
      .destroy({ where: { id: req.params.id } })
      .then(function(dbCustomers) {
        res.json(dbCustomers);
      });
  });
};
