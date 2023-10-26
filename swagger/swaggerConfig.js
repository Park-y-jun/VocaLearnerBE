const swaggerJsdoc = require("swagger-jsdoc");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "VocaLearner API with Swagger",
      version: "1.0.0",
      description: "VocaLearner API with Swagger",
    },
    servers: [
      {
        url: "http://localhost:8080/",
        description: "VocaLearnerBE server",
      },
    ],
    tags: [
      {
        name: "user",
        description: "About User",
      },
      {
        name: "list",
        description: "About Vocabulary Lists",
      },
      {
        name: "word",
        description: "About Vocabulary Words",
      },
    ],
  },
  apis: ["./swagger/swagger-schemas/*.js", "./src/controllers/*.js"],
};

const specs = swaggerJsdoc(options);

module.exports = specs;
