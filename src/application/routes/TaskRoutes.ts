import { Router, Request, Response } from "express";
import { TaskController } from "../controllers/TaskController";

const taskRoute = Router();

const taskController = new TaskController();

taskRoute.get("/", (req: Request, res: Response) => {
    taskController.getTasks(req, res);
});

taskRoute.post("/", (req: Request, res: Response) => {
  taskController.createTask(req, res);
});

export default taskRoute;