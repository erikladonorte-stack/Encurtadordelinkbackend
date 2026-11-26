const express = require("express");

const codesService = require("./services/codes.service");
const baseService = require("./services/base.service");
const linksService = require("./services/links.service");
const linksController = require("./controllers/links.controller");
const createLinksRoutes = require("./routes/links.routes");
const docsRoutes = require("./routes/docs.routes");


function startApp({counterRepository, linksRepository}, env) {
    const base = baseService(env.codeAlphabet);

    const codes = codesService(counterRepository, base, env.counterBlockSize);

    const links = linksService(linksRepository, codes, env.retentionYears, env.maxUrlLength);

    const linksRouteController = linksController(links, env.baseUrl, env.cacheSeconds);

    const app = express();
    app.use(express.json());
    app.use(docsRoutes);
    app.use(createLinksRoutes(linksRouteController));

    app.use((error, request, response, next) => {
        const status = error.status || 500;
        response.status(status).json({
            error: error.code || "INTERNAL_ERROR",
            message: error.message || "Erro interno do servidor.",
        });
    });

    return app;

}

module.exports = startApp;