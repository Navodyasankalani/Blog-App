import express from "express"
import {updateUser,getUser} from "../controllers/user.js"

const router = express.Router()

router.get("/:id", getUser);
router.put("/:id", updateUser);

export default router