import express from "express";
import mock from "./mock/mock";
const router = express.Router();

const enableMock = true;

router.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

router.use("/", mock);

export default router;
