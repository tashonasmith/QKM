var db = require("../models");

// module.exports = function(app) {
//   // Get all examples
//   app.get("/api/examples", function(req, res) {
//     db.Example.findAll({}).then(function(dbExamples) {
//       res.json(dbExamples);
//     });
//   });

//   // Create a new example
//   app.post("/api/examples", function(req, res) {
//     db.Example.create(req.body).then(function(dbExample) {
//       res.json(dbExample);
//     });
//   });

//   // Delete an example by id
//   app.delete("/api/examples/:id", function(req, res) {
//     db.Example.destroy({ where: { id: req.params.id } }).then(function(dbExample) {
//       res.json(dbExample);
//     });
//   });
// };



module.exports = function(app) {
  app.get("/api/kids/:id", function (req, res) {
    db.Kids.findOne({
      where: {
        id: req.params.id
      },
      include: [db.Timedhw, db.Taskedhw, db.Chores, db.Dietary] 
    }).then(function(dbKids) {
      // console.log(dbKids.dataValues.Timedhws[0].dataValues.assignment)
      // console.log(dbKids.dataValues.Timedhws[0].dataValues.minutes_required)
      console.log(dbKids.dataValues.Timedhws[0]);
      console.log(dbKids.dataValues.Taskedhws[0]);
      console.log(dbKids.dataValues.Chores[0]);
      console.log(dbKids.dataValues.Dietaries[0]);
      // console.log(dbKids)
      // console.log(dbKids.dataValues.Timedhws.Timedhw)
      res.render("individualkid", {
          Kid: dbKids
        });

    });
  });
  app.get("/api/Timedhw/", function (req, res) {
    db.Timedhw.findAll({})
    .then(function(dbTimedhw) {
      res.json(dbTimedhw);
      console.log(dbTimedhw);
    })
  });
  app.get("/api/Timedhw/:id", function (req, res) {
    db.Timedhw.findAll({
      where: {
        id: req.params.id
      }
    })
    .then(function(dbTimedhwid) {
      res.json(dbTimedhwid);
      console.log(dbTimedhwid);
    })
  });
  app.delete("/api/kids/:id/Timedhw/:timedhwid", function (req, res) {
    console.log(req.params.id)
    db.Timedhw.destroy({
      where: {
        id: req.params.timedhwid
      }
    }).then(function(dbTimedhw) {
      res.json(dbTimedhw)
      console.log("Successfully deleted")
    });
  }); 
  app.delete("/api/kids/:id/Taskedhw/:taskedhwid", function (req, res) {
    db.Taskedhw.destroy({
      where: {
        id: req.params.taskedhwid
      }
    }).then(function(dbTaskedhw) {
      res.json(dbTaskedhw);
      console.log("Task successfully deleted")
    });
  });
  app.delete("/api/kids/:id/Chores/:choreid", function (req, res) {
    db.Chores.destroy({
      where: {
        id: req.params.choreid
      }
    }).then(function(dbChores) {
      res.json(dbChores);
      console.log("Chore successfully deleted")
    });
  });
  app.delete("/api/kids/:id/Dietary/:foodid", function (req, res) {
    db.Dietary.destroy({
      where: {
        id: req.params.foodid
      }
    }).then(function(dbDietary) {
      res.json(dbDietary);
      console.log("Food successfully deleted")
    });
  });
  app.post("/api/Timedhw", function(req, res) {
    console.log(req.body)
    db.Timedhw.create({
      assignment: req.body.assignment,
      minutes_required: req.body.minutes_required,
      UserId: req.body.user_id
    }).then(function(dbTimedhw) {
      res.json(dbTimedhw);
    });
  });
}


