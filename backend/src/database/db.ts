import mysql2 from "mysql2/promise";
import Bluebird from "bluebird";

const db = mysql2.createPool({
  database: process.env.DATABASE,
  host: process.env.DATABASE_HOST,
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  Promise: Bluebird,
});

export default db;
