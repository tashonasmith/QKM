var db = require("../models");

module.exports = function(app) {
    // Get all Taskedhw
    app.get("/api/taskedhw", function(req, res) {
        db.Taskedhw.findAll({
            //where: query - needed?--not needed - would be empty ojbect
        }).then(function(dbTaskedhw) {
            res.json(dbTaskedhw);
        });
    });

    // Create a new taskedhw
    app.post("/api/taskedhw", function(req, res) {
        db.Taskedhw.create(req.body).then(function(dbTaskedhw) {
            res.json(dbTaskedhw);
        });
    });

    // Delete a taskedhw by id
    app.delete("/api/taskedhw/:id", function(req, res) {
        db.Taskedhw.destroy({
            where: {
                id: req.params.id
            }
        }).then(function(dbTaskedhw) {
            res.json(dbTaskedhw);
        });
    });
};