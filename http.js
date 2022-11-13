// const http = require("http");
// const port = 3001;

// const server = http.createServer((request, response) => {
//     response.end("hola Coder 2s2s");
// });

// const conectedServer = server.listen(port, () => {
//     console.log(`server on http://localhost:${port}`);
// });

// conectedServer.on("error", (error) => console.log(error));

const http = require("http");
const moment = require("moment");
const port = 3001;

const server = http.createServer((request, response) => {
    let hora = moment().hour();
    let mensaje = "buenas noches";
    if (hora >= 6 && hora <= 12) mensaje = "buenos dias";
    if (hora >= 13 && hora <= 19) mensaje = "buenas tardes";

    response.end(`${mensaje}`);
});

const conectedServer = server.listen(port, () => {
    console.log(`server on http://localhost:${port}`);
});

conectedServer.on("error", (error) => console.log(error));
