import express from "express";

import runQuery from "db/runQuery";

const router = express.Router();

router.get("/health", (req, res) => {
  res.json({ status: "alive" });
});

router.get("/sweets", async (req, res) => {
  const data = await runQuery("SELECT * FROM sweets");
  res.json(data);
});

export default router;
