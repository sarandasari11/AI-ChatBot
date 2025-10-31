// This file defines a test route to verify backend functionality

import express from "express";
const router = express.Router();

router.get("/", (req, res) => {
  res.json({ message: "Backend is running successfully!" });
});

export default router;
