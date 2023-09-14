const express = require('express')
const swaggerUi = require('swagger-ui-express')

const specs = require('./swagger/swaggerConfig')

class App {
  constructor() {
    this.app = express();
    this.port = 8080;

    this.startSever();
    this.middlewareConfig();
    this.routerConfig();
  }

  startSever() {
    this.app.listen(this.port, (req, res) => {
      console.log(`${this.port}`);
    });
  }

  middlewareConfig() {
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: false }));
  }

  routerConfig() {
    this.app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));
  }
}
 
new App();

