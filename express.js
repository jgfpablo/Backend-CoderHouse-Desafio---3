let Contenedor = require("./products.js");

let express = require("express");

let contenedor = new Contenedor();

const PORT = process.env.PORT || 8080;

let app = express();

app.all("/", (req, res, next) => {
    res.send(`Desafio 3 Backend CoderHouse`);
});

app.get("/productos", async (req, res, next) => {
    const productos = await contenedor.getAll();

    res.json(productos);
});

app.get("/productoRandom", async (req, res, next) => {
    const productos = await contenedor.getRandom();

    res.json(productos);
});

app.listen(PORT, () => console.log(`server on http://localhost:${PORT}`));
