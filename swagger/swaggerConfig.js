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
        url: "http://localhost/",
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
  // security: [
  //   {
  //     BearerAuth: [], // BearerAuth 보안 정의를 사용할 수 있도록 추가
  //   },
  // ],
  apis: ["./swagger/swagger-schemas/*.js", "./src/controllers/*.js"],
};

const specs = swaggerJsdoc(options);

module.exports = specs;
