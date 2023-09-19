const express = require('express')
const swaggerUi = require('swagger-ui-express')
const morgan = require('morgan')

const specs = require('./swagger/swaggerConfig')
const errorHandler = require('./src/middlewares/errorHandler')

class App {
  constructor() {
    this.app = express();
    this.port = 8080;

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
    this.app.use(morgan('combined'))
    
  }

  routerConfig() {
    this.app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));
    this.app.use("/api/v1/user", require('./src/controllers/user'));
    this.app.use("/api/v1/list", require("./src/controllers/list"));
  }

  errorHandleConfig() {
    this.app.use(errorHandler);
  }
}
 
new App();

