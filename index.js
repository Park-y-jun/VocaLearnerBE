require("dotenv").config();

const express = require("express");
const swaggerUi = require("swagger-ui-express");
const morgan = require("morgan");
const cors = require('cors')

const specs = require("./swagger/swaggerConfig");
const errorHandler = require("./src/middlewares/errorHandler");
const verifyToken = require("./src/middlewares/verifyToken")

class App {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;
    this.middlewareConfig();
    this.startSever();
    this.routerConfig();
    this.errorHandleConfig();
  }

  startSever() {
    this.app.listen(this.port, (req, res) => {
      console.log(`${this.port}`);
    });
  }

  middlewareConfig() {
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: false }));
    this.app.use(cors({ origin: process.env.FRONTEND_URL }));
    this.app.use(morgan("combined"));
  }

  routerConfig() {
    this.app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));
    this.app.use("/api/v1/user", require("./src/controllers/user"));
    this.app.use(verifyToken)
    this.app.use("/api/v1/list", require("./src/controllers/list"));
    this.app.use("/api/v1/word", require("./src/controllers/word"));
  }

  errorHandleConfig() {
    this.app.use(errorHandler);
  }
}

new App();
