import { Router } from "express";
import { getAllColis } from "../controllers/colis.js";


export const colis = Router();

colis.get("/", getAllColis);