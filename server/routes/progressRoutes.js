import express from "express";
import {
  increment,
  decrement,
  fetchProgress,
} from "../controllers/progressControllers.js";
const router = express.Router();

router.route("/").get(fetchProgress);
router.route("/increment").get(increment);
router.route("/decrement").get(decrement);

export default router;
