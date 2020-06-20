//copied code from original apiRoutes Project 2 file
//using unit 15, activity 13 apiRoutes as reference

var db = require("../models");

module.exports = function(app) {
    // Get all kids
    app.get("/api/kids", function(req, res) {
        db.Kids.findAll({
            //where: query - needed?
        }).then(function(dbKids) {
            res.json(dbKids);
        });
    });

    // Create a new kid
    app.post("/api/examples", function(req, res) {
        db.Kids.create(req.body).then(function(dbKids) {
            res.json(dbKids);
        });
    });

    // Delete an example by id
    app.delete("/api/kids/:id", function(req, res) {
        db.Kids.destroy({
            where: {
                id: req.params.id
            }
        }).then(function(dbKids) {
            res.json(dbKids);
        });
    });
};