/* eslint-disable camelcase */
/* eslint-disable indent */
/* eslint-disable prettier/prettier */
module.exports = function(sequelize, DataTypes) {
    var Users = sequelize.define("Users", {
      user_id: DataTypes.STRING,
      password: DataTypes.STRING,
      email_address: DataTypes.STRING
    });
  
    //code to put foreign key on the “belongsTo” tables
    Users.associate = function(models) {
      // eslint-disable-next-line prettier/prettier
      Users.hasMany(models.Kids, models.Timedhw, models.Taskedhw, models.Chores, models.Dietary, {
        onDelete: "CASCADE"
      }
      );
    };
    return Users;
  };