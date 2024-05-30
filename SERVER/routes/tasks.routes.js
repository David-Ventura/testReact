import { Router } from "express";
import {
  getTasks,
  getTask,
  createTask,
  deleteTask,
  updateTask,
  getUnionTablas,
  serveronline,
} from "../controllers/tasks.controllers.js";




const router = Router();

router.get("/tasks", getTasks);

router.get("/taskss/:id", getTask);

router.post("/tasks", createTask);

router.put("/tasks/:id", updateTask);

router.delete("/tasks/:id", deleteTask);

router.get("/union",getUnionTablas)

router.get("/server.status", serveronline)

export default router;