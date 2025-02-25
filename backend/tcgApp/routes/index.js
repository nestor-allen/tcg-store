import express from "express";
const router = express.Router();

router.get("/", function (req, res) {
  res.send("Welcome to the TCG Store API!");
});

export default router;
