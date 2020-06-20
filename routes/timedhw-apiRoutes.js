var db = require("../models");

module.exports = function(app) {
    // Get all Timedhw
    app.get("/api/timedhw", function(req, res) {
        db.Timedhw.findAll({
            //where: query - needed?--not needed - would be empty ojbect
        }).then(function(dbTimedhw) {
            res.json(dbTimedhw);
        });
    });

    // Create a new timedhw
    app.post("/api/timedhw", function(req, res) {
        db.dbTimedhw.create(req.body).then(function(dbTimedhw) {
            res.json(dbTimedhw);
        });
    });

    // Delete a chore by id
    app.delete("/api/timedhw/:id", function(req, res) {
        db.dbTimedhw.destroy({
            where: {
                id: req.params.id
            }
        }).then(function(dbTimedhw) {
            res.json(dbTimedhw);
        });
    });
};