var db = require("../models");


module.exports = function(app) {
  app.get("/api/Timedhw/", function (req, res) {
    db.Timedhw.findAll({})
    .then(function(dbTimedhw) {
      res.json(dbTimedhw);
      console.log(dbTimedhw);
    })
  });

  app.get("/api/Taskedhw/", function (req, res) {
    db.Timedhw.findAll({})
    .then(function(dbTaskedhw) {
      res.json(dbTaskedhw);
      console.log(dbTaskedhw);
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

  app.get("/api/user/:id", function(req, res) {
    db.Users.findOne({
      where: {
        id: req.params.id
      }
    }).then(function(dbUser) {
      res.json(dbUser);
      console.log(dbUser)
    });
  });


  app.get("/api/kid/:id", function(req, res) {
    db.Kids.findOne({
      where: {
        id: req.params.id
      }
    }).then(function(dbKid) {
      res.json(dbKid);
      console.log(dbKid);
    });
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

  app.post("/api/user/:userid/kid/:kidid/Timedhw", function(req, res) {
    console.log(req.body)
    console.log(req.params.userid)
    db.Timedhw.create({
      assignment: req.body.assignment,
      minutes_required: req.body.minutes_required,
      UserId: req.params.userid,
      KidId: req.params.kidid 
    })
    res.redirect("/user/:userid/kid/:kidid")
  });

  app.post("/api/user/:userid/kid/:kidid/Taskedhw", function(req, res) {
    console.log(req.body)
    console.log(req.params.userid)
    db.Taskedhw.create({
      subject: req.body.subject,
      assignment: req.body.assignment,
      UserId: req.params.userid,
      KidId: req.params.kidid 
    })
    res.redirect("/user/:userid/kid/:kidid")
  });

  app.post("/api/user/:userid/kid/:kidid/Chores", function(req, res) {
    console.log(req.body)
    console.log(req.params.userid)
    db.Chores.create({
      chore: req.body.chore,
      UserId: req.params.userid,
      KidId: req.params.kidid 
    })
    res.redirect("/user/:userid/kid/:kidid")
  });

  app.post("/api/user/:userid/kid/:kidid/Dietary", function(req, res) {
    console.log(req.body)
    console.log(req.params.userid)
    db.Dietary.create({
      food: req.body.food,
      servings_required: req.body.servings_required,
      UserId: req.params.userid,
      KidId: req.params.kidid 
    })
    res.redirect("/user/:userid/kid/:kidid")
  });

  app.get("/api/users/:userid/kids/:kidid/Timedhw", function(req, res) {
    db.Timedhw.findAll({
      where: {
        KidId: req.params.kidid
      },
      include: [db.Users]
    }).then(function(dbTimedhw) {
      res.json(dbTimedhw)
      console.log(dbTimedhw);
    })
    })
}
