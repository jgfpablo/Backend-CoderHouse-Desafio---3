const fs = require("fs");
class Contenedor {
    async save(obj) {
        try {
            if (
                fs.accessSync("./products.txt", fs.constants.F_OK) === undefined
            ) {
                const DATOS = await fs.promises.readFile(
                    "products.txt",
                    "utf-8"
                );

                if (DATOS == "") {
                    await fs.writeFileSync(
                        "products.txt",
                        `[{"Title":"${obj.title}","Price":"${
                            obj.price
                        }","Id":${1}}]`
                    );
                } else {
                    let data = JSON.parse(DATOS);

                    data.push(((obj.Id = data.length + 1), obj));
                    await fs.writeFileSync(
                        "products.txt",
                        JSON.stringify(data)
                    );
                }
            }
        } catch (error) {
            await fs.writeFileSync("products.txt", "");
            console.log(error);
        }
    }

    async getById(id) {
        try {
            if (
                fs.accessSync("./products.txt", fs.constants.F_OK) === undefined
            ) {
                const DATOS = await fs.promises.readFile(
                    "products.txt",
                    "utf-8"
                );
                let data = JSON.parse(DATOS);

                data.id - 1 === undefined
                    ? console.log("el id ingresado no existe")
                    : console.log(data[id - 1]);
            }
        } catch (error) {
            console.log(error);
        }
    }

    async getAll() {
        try {
            if (
                fs.accessSync("./products.txt", fs.constants.F_OK) === undefined
            ) {
                const DATOS = await fs.promises.readFile(
                    "products.txt",
                    "utf-8"
                );

                return JSON.parse(DATOS);
            }
        } catch (error) {
            console.log(error);
        }
    }

    async deleteById(id) {
        try {
            if (
                fs.accessSync("./products.txt", fs.constants.F_OK) === undefined
            ) {
                const DATOS = await fs.promises.readFile(
                    "products.txt",
                    "utf-8"
                );
                let data = JSON.parse(DATOS);
                data.splice(id - 1, 1);

                await fs.writeFileSync("products.txt", JSON.stringify(data));
            }
        } catch (error) {
            console.log(error);
        }
    }

    async deleteAll() {
        try {
            await fs.writeFileSync("products.txt", "");
        } catch (error) {
            console.log(error);
        }
    }

    async getRandom() {
        try {
            if (
                fs.accessSync("./products.txt", fs.constants.F_OK) === undefined
            ) {
                const DATOS = await fs.promises.readFile(
                    "products.txt",
                    "utf-8"
                );
                let data = JSON.parse(DATOS);

                let aleatorio = 1 + Math.floor(Math.random() * data.length);

                return data[aleatorio - 1];
            }
        } catch (error) {
            console.log(error);
        }
    }
}
module.exports = Contenedor;
const Prueba = new Contenedor();
// Prueba.save({ Title: "cafe-moka", Price: "240" });
// Prueba.save({ Title: "cappucino", Price: "200" });
// Prueba.save({ Title: "americano", Price: "150" });
// Prueba.getById(1);
// Prueba.getAll();
// Prueba.deleteById(1);
// Prueba.deleteAll();
// Prueba.getRandom();
