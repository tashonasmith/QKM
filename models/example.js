module.exports = function(sequelize, DataTypes) {
    var Example = sequelize.define("Example", {
        text: DataTypes.STRING,
        description: DataTypes.TEXT
    });
    return Example;
};


//AJ's draft 
// module.exports = (sequelize, DataTypes) => {
//     var Kids = sequelize.define('Kids', {
//         title: DataTypes.STRING
//     });

//     Kids.associate = function(models) {
//         models.Kids.belongsTo(models.User, {
//             onDelete: "CASCADE",
//             foreignKey: {
//                 allowNull: false
//             }
//         });
//     };

//     return Kids;
// };


// module.exports = (sequelize, DataTypes) => {
//         var Timedhw = sequelize.define('Timedhw', {
//             title: DataTypes.STRING
//         });

//         //code to put foreign key on the “belongsTo” tables
//         Timedhw.associate = function(models) {
//                 models.Timedhw.belongsTo(models.Kids, {
//                         onDelete: "CASCADE",
//                         foreignKey: {
//                             allowNull: false
//                         }

//                         models.Timedhw.belongsTo(models.Users, {
//                             onDelete: "CASCADE",
//                             foreignKey: {
//                                 allowNull: false
//                             }

//                         });
//                     };

//                     return Timedhw;
//                 };