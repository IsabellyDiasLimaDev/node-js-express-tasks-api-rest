import { Request, Response } from "express";
import { TaskDTO } from "../../data/dtos/TaskDTO";
import { UserDto } from "../../data/dtos/UserDTO";
import { Task } from "../../data/models/Task";
import { TaskService } from "../services/TaskService";
import { UserService } from "../services/UserService";

export class TaskController {
  taskService = new TaskService();
  userService = new UserService();

  async getTasks(request: Request, response: Response) {
    const tasks = await this.taskService.getTasks();

    return response.status(200).json(tasks);
  }

  async createTask(request: Request, response: Response) {
    const { title, userId, description, deadline }: TaskDTO = request.body;

    const userDto: UserDto = await this.userService.getUserById(userId);

    const createdTask: Promise<Task> = this.taskService.saveTask({ title, userId, description, deadline });

    return response.status(201).json(createdTask);
  }
}
