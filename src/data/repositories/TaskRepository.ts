import { typeOrmConfig } from "../../core/config/typeOrmConfig";
import { Task } from "../models/Task";

export class TaskRepository {
  taskRepository = typeOrmConfig.getRepository(Task);

  async saveTask(task: Task): Promise<Task> {
    return this.taskRepository.save(task);
  }

  async getTasks(): Promise<Task[]> {
    return this.taskRepository.find();
  }

  async getTaskById(id: string): Promise<Task[]> {
    return this.taskRepository.findBy({
      id: id,
    });
  }

  async updateTask(task: Task) {
    const hasId = await this.taskRepository.hasId(task);
    if (hasId) {
      return this.taskRepository.save(task);
    }
  }

//   async deleteTask(id: string) {
//     const task = await this.taskRepository.findBy({
//         id: id,
//       });

//     await this.taskRepository.delete();
//   };
}
