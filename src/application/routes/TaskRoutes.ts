import { Router, Request, Response } from "express";
import { TaskController } from "../controllers/TaskController";

const route = Router();

const taskController = new TaskController();

route.get("/", (req: Request, res: Response) => {
    taskController.getTasks(req, res);
});

route.post("/", (req: Request, res: Response) => {
  taskController.createTask(req, res);
})

export default route;