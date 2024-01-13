import { Request, Response } from "express";
import { TaskService } from "../services/TaskService";
import { TaskDTO } from "../../data/dtos/TaskDTO";
import { Task } from "../../data/models/Task";

export class TaskController {
  taskService = new TaskService();

  async getTasks(request: Request, response: Response) {
    const tasks = await this.taskService.getTasks();

    return response.status(200).json(tasks);
  }

  async createTask(request: Request, response: Response) {
    const { title, description, deadline }: TaskDTO = request.body;

    const task = new Task(title, description, deadline);
    const createdTask: Promise<Task> = this.taskService.saveTask(task);
    return response.status(201).json(createdTask);
  }
}
