import { Router } from "express";
import {
  deleteDestination,
  getAllDestination,
  getOnedestination,
  postDestination,
  putDestination,
} from "../controllers/destination.js";

export const destination = Router();

destination.get("/", getAllDestination);
destination.post("/", postDestination);
destination.get("/:id", getOnedestination);
destination.put("/:id", putDestination);
destination.delete("/:id", deleteDestination);
