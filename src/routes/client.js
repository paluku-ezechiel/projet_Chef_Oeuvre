import { Router } from "express";
import {
  deleteClient,
  getAllClient,
  getOneClient,
  postClient,
  putClient,
} from "../controllers/client.js";

export const client = Router();

client.get("/", getAllClient);
client.get("/:id", getOneClient);
client.post("/", postClient);
client.put("/:id", putClient);
client.delete("/:id", deleteClient);
