// const { Person } = require("./person");

// const person = new Person("jota");

const dotenv = require('dotenv');

const connectToDatabase = require('./src/database/connect')

dotenv.config();

connectToDatabase();


// // require("./modeles/path")
// // require("./modeles/fs");
// // require("./modeles/http");
require("./modeles/express");