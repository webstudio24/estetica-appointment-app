import express from "express";
import { updateEsteticista, deleteEsteticista, getAllEsteticista, getSingleEsteticista, getEsteticistaProfile } from "../Controllers/esteticistaController.js";
import { authenticate, restrict } from "../auth/verifyToken.js";
import reviewRouter from "./review.js";

const router = express.Router();

//nested route
router.use("/:esteticistaId/reviews", reviewRouter);

router.get("/:id", getSingleEsteticista);
router.get("/", getAllEsteticista);
router.put("/:id",authenticate, restrict(['esteticista']), updateEsteticista);
router.delete("/:id",authenticate, restrict(['esteticista']), deleteEsteticista);

router.get('/profile/me', authenticate, restrict(['esteticista']), getEsteticistaProfile);

export default router