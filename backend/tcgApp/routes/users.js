import express from "express";
const router = express.Router();

router.get("/", function (req, res) {
  res.send("Users route is working!");
});

export default router;
