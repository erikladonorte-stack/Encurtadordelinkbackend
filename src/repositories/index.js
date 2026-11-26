function createRepositories(config) {

    if (config.driver === "memory") {
        const linksRepository = require("./memory/links.repository");
        const counterRepository = require("./memory/counter.repository");

        return {
            linksRepository: linksRepository(),
            counterRepository: counterRepository(),
        };
    }

    throw new Error(`Driver de repositório não suportado: '${config.driver}'`);
}

module.exports = createRepositories;