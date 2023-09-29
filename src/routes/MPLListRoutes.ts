import express, { Express, Router } from "express";
import MPLController from "../controllers/MPLlist";
const router = Router()


router.get("/mpl_id", MPLController.getAllMPLList)

export default router