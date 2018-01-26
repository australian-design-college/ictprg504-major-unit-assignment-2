import { initDb } from "./db/connection";
import startServer from "./server";

initDb().then(startServer);
