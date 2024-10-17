
const path=require('path');

require('dotenv').config({
  path:path.resolve(__dirname,'../.env')
});


module.exports = {
  development: {
    username: "postgres",
    password: process.env.PASSWORD,
    database: "rx_group",
    host: "localhost",
    dialect: "postgres",
    
  },
  test: {
    username: "root",
    password: process.env.PASSWORD,
    database: "database_test",
    host: "127.0.0.1",
    dialect: "mysql",
  },
  production: {
    username: "root",
    password: null,
    database: "database_production",
    host: "127.0.0.1",
    dialect: "mysql",
  },
};
