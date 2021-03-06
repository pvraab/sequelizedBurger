// ===============================================================================
// DEPENDENCIES
// We need to include the path package to get the correct file path for our html
// ===============================================================================
var path = require("path");
var db = require("../models");

// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
  // HTML GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases the user is shown an HTML page of content
  // ---------------------------------------------------------------------------

  // Render handlebars index page for root
  app.get("/", function(req, res) {
    console.log("Get index");
    db.burgers.findAll({}).then(function(dbBurgers) {
      db.customers.findAll({}).then(function(dbCustomers) {
        db.customers_burgers.findAll({}).then(function(dbCustomersBurgers) {
          var hbsObject = {
            burgers: dbBurgers,
            customers: dbCustomers,
            customersburgers: dbCustomersBurgers
          };
          // console.log(hbsObject);
          res.render("index", hbsObject);
        });
      });
    });
  });
};
