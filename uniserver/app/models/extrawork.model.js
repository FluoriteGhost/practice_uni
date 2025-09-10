module.exports = (sequelize, Sequelize) => {
  const extrawork = sequelize.define("extrawork", {
    extra_work: {
      type: Sequelize.STRING(100)
    }
  });

  return extrawork;
};