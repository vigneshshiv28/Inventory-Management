const express = require("express");
const router = express.Router();
import { verifyToken } from "../middleware/auth.js";
import { getUser } from "../controllers/user.js";

router.get("/:id", verifyToken, getUser);

export default router;