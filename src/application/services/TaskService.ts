import { Task } from "../../data/models/Task";
import { TaskRepository } from "../../data/repositories/TaskRepository";

export class TaskService {
  taskRepository = new TaskRepository();

  async saveTask(task: Task) {
    return this.taskRepository.saveTask(task);
  }

  async getTasks() {
    return this.taskRepository.getTasks();
  }

  async getTaskById(id: string) {
    return this.taskRepository.getTaskById(id);
  }

  async updateTask(task: Task) {
    return this.taskRepository.updateTask(task);
  }
}
