module.exports = (sequelize, Sequelize) => {
  const kjobtitle = sequelize.define("kjobtitle", {
    job_title: {
      type: Sequelize.STRING(50)
    }
  });

  return kjobtitle;
};