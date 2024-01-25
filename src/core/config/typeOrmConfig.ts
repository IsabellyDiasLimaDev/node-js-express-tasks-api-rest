import { DataSource } from "typeorm";
import { Task } from "../../data/models/Task";
import { User } from "../../data/models/User";
import "dotenv/config";

const { DBHOST, DBPORT, DBUSERNAME, DBPASSWORD, DBNAME } = process.env;

export const typeOrmConfig = new DataSource({
  type: "mariadb",
  host: DBHOST,
  port: Number(DBPORT),
  username: String(DBUSERNAME),
  password: String(DBPASSWORD),
  database: String(DBNAME),
  synchronize: true,
  logging: true,
  entities: [User, Task],
});

typeOrmConfig.initialize()
  .then(() => {
    console.log("Data Source has been initialized!")
  }).catch((err) => {
    console.error("Error during Data Source initialization", err)
  });