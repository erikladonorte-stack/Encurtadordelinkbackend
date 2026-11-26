const path = require('node:path');
const swaggerJSDoc = require('swagger-jsdoc');
const { version } = require("../../package.json");

const swaggerOptions = {
    failOnErrors: true,
    apis: [path.join(__dirname, '../**/*.js').replace(/\\/g, "/")],
    definition: {
        openapi: '3.0.3',
        info: {
            title: 'Encurtador de URLs - DS2',
            version: version,
        },
    },
    servers: [
        { url: '/' }
    ],
};

const swaggerConfig = swaggerJSDoc(swaggerOptions);

module.exports = swaggerConfig;