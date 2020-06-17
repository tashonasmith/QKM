module.exports = function(sequelize, DataTypes) {
    var Taskedhw = sequelize.define('Taskedhw', {
      subject: DataTypes.STRING,
      assignment: DataTypes.STRING
    });
    Taskedhw.associate = function(models) {
      models.Taskedhw.belongsTo(models.Kids, models.Users, {
        onDelete: 'CASCADE',
        foreignKey: {
          allowNull: false
        }
      });
    };
    return Taskedhw;
};