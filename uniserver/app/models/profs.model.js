module.exports = (sequelize, Sequelize) => {
  const profs = sequelize.define("profs", {
    name: {
      type: Sequelize.STRING(100)
    },
    kjobtitleID: {
      type: Sequelize.BIGINT
    },
    auditorium: {
      type: Sequelize.INTEGER
    },
    rate: {
      type: Sequelize.INTEGER
    }
  });

  return profs;
};