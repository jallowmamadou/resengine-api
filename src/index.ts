import "reflect-metadata";
import { app } from "./app";
import { createConnection } from "typeorm";
import { Booking } from "./entity/Booking";
import * as dotenv from "dotenv";

dotenv.config();

createConnection({
  type: "mysql",
  host: process.env.MYSQL_DB_HOST,
  port: 3306,
  username: process.env.MYSQL_DB_USER,
  password: process.env.MYSQL_DB_PASSWORD,
  database: process.env.MYSQL_DB_NAME,
  entities: [Booking],
  synchronize: false,
  logging: true,
})
  .then((connection) => {
    console.log("database is connected: ", connection.isConnected);
    // here you can start to work with your entities
  })
  .catch((error) => console.log(error));

app.listen(process.env.PORT, () =>
  console.log(`Up and running buddy @ ${process.env.PORT}!`)
);
