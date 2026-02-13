import database from "./config/database.js";

database.raw("SELECT NOW()").then((data) => {
    console.log(data);
});

console.log("Servidor ligado!");