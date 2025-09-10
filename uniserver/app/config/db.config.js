module.exports = {
  HOST: "localhost",
  USER: "postgres",
  PASSWORD: "sqlsuperuser",
  DB: "uni",
  dialect: "postgres",
  port: 5432,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};