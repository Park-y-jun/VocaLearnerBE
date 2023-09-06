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
        url: "http://127.0.0.1/",
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
  apis: [
    // "./src/controllers/*.js",
    // "./src/services/*.js",
    // "./src/errors/*.js",
    // "./src/controllers/article/*.js",
    // "./src/controllers/plant/*.js",
    "./src/migrations/*.js",
    "./src/controllers/*.js",
  ],
};

const specs = swaggerJsdoc(options);

module.exports = specs;
