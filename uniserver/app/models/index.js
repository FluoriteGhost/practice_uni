const dbConfig = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.profs = require("./profs.model.js")(sequelize, Sequelize);
db.courses = require("./courses.model.js")(sequelize, Sequelize);
db.kjobtitle = require("./kjobtitle.model.js")(sequelize, Sequelize);
db.extrawork = require("./extrawork.model.js")(sequelize, Sequelize);

db.kjobtitle.hasMany(db.profs, { as: "profs" });
db.profs.belongsTo(db.kjobtitle, {
  foreignKey: "kjobtitleId",
  as: "kjobtitles",
});

profs.belongsToMany(courses, {
  through: "profcourses",
  as: "profcourses",
  foreignKey: "profsID",
});

profs.belongsToMany(extrawork, {
  through: "profextrawork",
  as: "profextrawork",
  foreignKey: "profsID",
});

courses.belongsToMany(profs, {
  through: "profcourses",
  as: "profcourses",
  foreignKey: "coursesID",
});

extrawork.belongsToMany(profs, {
  through: "profextrawork",
  as: "profextrawork",
  foreignKey: "extraworkID",
});


module.exports = db;
