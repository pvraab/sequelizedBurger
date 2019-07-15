var db = require("../models");

module.exports = function(app) {
  // Get all customers burgers results
  app.get("/api/customers/burgers", function(req, res) {
    db.customers_burgers.findAll({}).then(function(dbCustomersBurgers) {
      res.json(dbCustomersBurgers);
    });
  });

  // Get all customers burgers results by userId
  app.get("/api/customers/burgers/:id", function(req, res) {
    db.customers_burgers
      .findAll({
        where: {
          userId: req.params.id
        }
      })
      .then(function(dbCustomersBurgers) {
        res.json(dbCustomersBurgers);
      });
  });

  // Get all customers burgers results by userId and burgerId
  app.get("/api/customers/burgers/:id/:cid", function(req, res) {
    db.customers_burgers
      .findOne({
        where: {
          userId: req.params.id,
          burgerId: req.params.cid
        }
      })
      .then(function(dbCustomersBurgers) {
        res.json(dbCustomersBurgers);
      });
  });

  // Create a new customers burgers
  app.post("/api/customers/burgers", function(req, res) {
    db.customers_burgers
      .create(req.body)
      .then(function(dbCustomersBurgers) {
        res.json(dbCustomersBurgers);
      })
      .catch(function(err) {
        // Whenever a validation or flag fails, an error is thrown
        // We can "catch" the error to prevent it from being "thrown", which could crash our node app
        res.json(err);
      });
  });

  // PUT route for updating customers burgers
  app.put("/api/customers/burgers", function(req, res) {
    db.customers_burgers
      .update(req.body, {
        where: {
          id: req.body.id
        }
      })
      .then(function(dbCustomersBurgers) {
        res.json(dbCustomersBurgers);
      });
  });

  // Delete a customers burgers by user id and burger id
  app.delete("/api/customers/burgers/:id/:cid", function(req, res) {
    db.customers_burgers
      .destroy({
        where: { userId: req.params.id, burgerId: req.params.cid }
      })
      .then(function(dbCustomersBurgers) {
        res.json(dbCustomersBurgers);
      });
  });
};
