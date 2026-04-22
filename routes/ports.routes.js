import { Router } from "express";
import { getAllPorts , createPort, getPortbyCode, deletePort} from "../controllers/ports.controller.js";

const router = Router();

router.get('/',getAllPorts);
// router.get("/", (req,res) =>res.json({message : "TODO"}));
router.get("/:code", getPortbyCode);
router.post("/", createPort);
router.delete("/:code", deletePort);

export default router;