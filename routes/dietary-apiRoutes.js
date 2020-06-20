var db = require("../models");

module.exports = function(app) {
    // Get all Dietary
    app.get("/api/dietary", function(req, res) {
        db.Dietary.findAll({
            //where: query - needed?--not needed - would be empty ojbect
        }).then(function(dbDietary) {
            res.json(dbDietary);
        });
    });

    // Create a new dietary item
    app.post("/api/dietary", function(req, res) {
        db.Dietary.create(req.body).then(function(dbDietary) {
            res.json(dbDietary);
        });
    });

    // Delete a dietary item by id
    app.delete("/api/dietary/:id", function(req, res) {
        db.Dietary.destroy({
            where: {
                id: req.params.id
            }
        }).then(function(dbDietary) {
            res.json(dbDietary);
        });
    });
};