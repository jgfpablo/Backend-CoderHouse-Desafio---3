let express = require("express");

const PORT = 3001;

let app = express();

app.all("/", (req, res, next) => {
    res.send(`Estoy en el metodo all de express`);
});

app.get("/", (req, res, next) => {
    res.send("hola con expressss");
});

app.post("/", (req, res, next) => {
    res.send(`Estoy en el metodo ${req.method}`);
});

app.get("/estudiantes", (req, res, next) => {
    res.send("Estoy en estudiantes");
});

app.listen(PORT, () => console.log(`server on http://localhost:${PORT}`));
