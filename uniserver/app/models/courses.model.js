module.exports = (sequelize, Sequelize) => {
  const courses = sequelize.define("courses", {
    course_name: {
      type: Sequelize.STRING(100)
    },
    auditorium_hours: {
      type: Sequelize.INTEGER
    },
    selfstudy_hours: {
      type: Sequelize.INTEGER
    },
    credits: {
      type: Sequelize.INTEGER
    },
    
  });

  return courses;
};