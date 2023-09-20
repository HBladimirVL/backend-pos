import express from "express";
import {
  getAllFactura,
  getFactura,
  createFactura,
  updateFactura,
  deleteFactura,
} from "../controllers/FacturaController.js";
const router = express.Router();

router.get("/", getAllFactura);
router.get("/:id", getFactura);
router.post("/", createFactura);
router.put("/:id", updateFactura);
router.delete("/:id", deleteFactura);

export default router;
