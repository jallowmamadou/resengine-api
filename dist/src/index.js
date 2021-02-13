"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
var app_1 = require("./app");
var typeorm_1 = require("typeorm");
var Booking_1 = require("./entity/Booking");
var dotenv = require("dotenv");
dotenv.config();
typeorm_1.createConnection({
    type: "mysql",
    host: process.env.MYSQL_DB_HOST,
    port: 3306,
    username: process.env.MYSQL_DB_USER,
    password: process.env.MYSQL_DB_PASSWORD,
    database: process.env.MYSQL_DB_NAME,
    entities: [Booking_1.Booking],
    synchronize: false,
    logging: true,
})
    .then(function (connection) {
    console.log("database is connected: ", connection.isConnected);
    // here you can start to work with your entities
})
    .catch(function (error) { return console.log(error); });
app_1.app.listen(process.env.PORT, function () {
    return console.log("Up and running buddy @ " + process.env.PORT + "!");
});
//# sourceMappingURL=index.js.map