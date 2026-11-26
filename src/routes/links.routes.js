const { Router } = require('express');

function createLinksRoutes(linksController) {

    const router = Router();

    /**
     * @openapi
     * /api/links:
     *   post:
     *     operationId: shortenUrl
     *     tags: [links]
     *     summary: Encurta uma URL longa em uma URL curta
     *     requestBody:
     *       required: true
     *       content:
     *         application/json:
     *           schema:
     *             type: object
     *             required: [url]
     *             properties:
     *               url:
     *                 type: string
     *                 format: uri
     *                 example: "https://www.etec.sp.gov.br"
     *     responses:
     *       201:
     *         description: URL encurtada com sucesso
     *         content:
     *           application/json:
     *             schema:
     *               $ref: "#/components/schemas/Link"
     *       400:
     *         description: URL ausente, inválida, longa demais ou protocolo não permitido
     *         content:
     *           application/json:
     *             schema:
     *               $ref: "#/components/schemas/Error"
     */
    router.post("/api/links", linksController.shorten);

    router.get("/api/links/:code", linksController.redirect);

    return router;
}

module.exports = createLinksRoutes;