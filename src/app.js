require("dotenv").config({
  path: process.env.NODE_ENV === "test" ? ".env.test" : ".env"
});

const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
require('express-group-routes')

class AppController {
  constructor() {
    this.express = express();

    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.express.use(cors({ origin: '*' }))

    this.express.use(bodyParser.json())
    this.express.use(bodyParser.urlencoded({ extended: false }))
  }

  routes() {
    require('./config/routes')(this.express)
  }
}

module.exports = new AppController().express;