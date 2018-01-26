import mysql from "mysql2/promise";

import accessEnv from "helpers/accessEnv";

let connection;

export const initDb = async () => {
  connection = await mysql.createConnection(accessEnv("DB_URL"));
};

export default () => connection;
