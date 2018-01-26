import express from "express";
import http from "http";

import middleware from "./middleware";
import routes from "./routes";

const app = express();
const server = http.Server(app);

const port = process.env.PORT || 8081;

export default () => {
  // Setup Middleware
  middleware(app);

  // Setup Routes
  routes(app);

  server.listen(port, "0.0.0.0", () => {
    console.log(`Service listening on ${port}`);
  });
};
