module.exports = function(sequelize, DataTypes) {
    var Dietary = sequelize.define('Dietary', {
      food: DataTypes.STRING,
      servings_required: DataTypes.INTEGER,
      servings_eaten: DataTypes.INTEGER
    });
    Dietary.associate = function(models) {
      models.Dietary.belongsTo(models.Kids, models.Users, {
        onDelete: 'CASCADE',
        foreignKey: {
          allowNull: false
        }
      });
    };
    return Dietary;
};