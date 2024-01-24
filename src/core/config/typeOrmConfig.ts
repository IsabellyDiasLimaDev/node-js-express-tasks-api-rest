import { DataSource } from "typeorm";
import { Task } from "../../data/models/Task";
import { User } from "../../data/models/User";

const { DBHOST, DBPORT, DBUSERNAME, DBPASSWORD, DBNAME } = process.env;

export const typeOrmConfig = new DataSource({
  type: "mariadb",
  host: DBHOST,
  port: Number(DBPORT),
  username: DBUSERNAME,
  password: DBPASSWORD,
  database: DBNAME,
  synchronize: true,
  logging: true,
  entities: [Task, User],
});

