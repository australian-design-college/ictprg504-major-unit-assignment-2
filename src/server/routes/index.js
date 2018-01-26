import express from "express";

import root from "./root";

export default expressHandler => {
  expressHandler.use("/", root);

  expressHandler.use("/*", (req, res) => {
    res.status(404).json({
      message: "Endpoint does not exist"
    });
  });
};
