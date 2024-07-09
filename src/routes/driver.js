import { Router } from "express";
import { deleteDriver, getAllDriver, getOnedriver, postDriver, putDriver } from "../controllers/driver.js";

export const driver = Router();

driver.get("/", getAllDriver);
driver.post("/", postDriver);
driver.get("/:id", getOnedriver);
driver.put("/:id", putDriver);
driver.delete("/:id", deleteDriver);