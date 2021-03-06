/* Configure the database to use PostgreSQL on Docker */
require('dotenv').config();

module.exports = {
  dialect: 'postgres' /* Selected database */,
  ssl:{
    require:true,
    rejectUnauthorized: false,
  },
  host: process.env.DATABASE_HOST || 'localhost',
  port: process.env.DATABASE_PORT || '5433' /* Database port */,
  username: process.env.DATABASE_USERNAME || 'postgres' /* Your Image name */,
  password:
    process.env.DATABASE_PWD || 'postgres' /* Your container password */,
  database: process.env.DATABASE || 'codefiq' /* Desired name */,
  define: {
    /* Standards */ timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
  pool: {
    maxConnections: 25,
    minConnections: 0,
    maxIdleTime: 1000000,
  },
  // disable logging; default: console.log
  logging: false,
};
