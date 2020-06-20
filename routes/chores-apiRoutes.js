//chores belongsTo Chores 
//chores also can belongsTo users

var db = require("../models");

module.exports = function(app) {
    // Get all chores
    app.get("/api/chores", function(req, res) {
        db.Chores.findAll({
            //where: query - needed?--not needed - would be empty ojbect
        }).then(function(dbChores) {
            res.json(dbChores);
        });
    });

    // Create a new chore
    app.post("/api/chores", function(req, res) {
        db.Chores.create(req.body).then(function(dbChores) {
            res.json(dbChores);
        });
    });

    // Delete a chore by id
    app.delete("/api/chores/:id", function(req, res) {
        db.Chores.destroy({
            where: {
                id: req.params.id
            }
        }).then(function(dbChores) {
            res.json(dbChores);
        });
    });
};