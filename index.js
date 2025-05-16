const { Person } = require("./person");

const person = new Person("jota");

const dotenv = require('dotenv');
dotenv.config();

// require("./modeles/path")
// require("./modeles/fs");
// require("./modeles/http");
require("./modeles/express");