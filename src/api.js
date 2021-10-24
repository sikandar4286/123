const express = require("express");
const serverless = require("serverless-http");

const app = express();
const router = express.Router();

router.get("/", (req, res) => {
    res.json({
        hello: "hi the is a api !!!!!",
    });
});
router.get("/test", (req, res) => {
    res.json({
        hello: "Sikandar ALI",
    });
});
router.get("/sikandar", (req, res) => {
    res.json({
        hello: "qwertyuiopasdfghjklzxcvbnm qwertyuioplkjhgfdszxcvbnm qwertyuioplkjhgfdsazxcvbnm,",
    });
});
router.get("/pmit", (req, res) => {
    res.json({
        hello: "pmit",
    });
});
router.get("/pcsir", (req, res) => {
    res.json({
        hello: "pcsir",
    });
});

app.use(`/.netlify/functions/api`, router);

module.exports = app;
module.exports.handler = serverless(app);
