import { DeleteResult } from "typeorm";
import { typeOrmConfig } from "../../core/config/typeOrmConfig";
import { Task } from "../models/Task";

export class TaskRepository {
  taskRepository = typeOrmConfig.getRepository(Task);

  async saveTask(task: Task): Promise<Task> {
    return this.taskRepository.save(task);
  }

  async getTasks(): Promise<Task[]> {
    const tasks = await this.taskRepository.find();

    if (tasks.length === 0) {
      throw new Error("Não existem tarefas cadastradas");
    }

    return tasks;
  }

  async getTaskById(id: string): Promise<Task> {
    const tasks = await this.taskRepository.findOneBy({
      id: id,
    });

    if (!tasks) {
      throw new Error(
        "Não foram encontradas tarefas cadastradas com o id selecionado"
      );
    }

    return tasks;
  }

  async updateTask(task: Task): Promise<Task> {
    const hasId = await this.taskRepository.hasId(task);
    if (!hasId) {
      throw new Error("Não existe tarefas a serem editadas");
    }

    return this.taskRepository.save(task);
  }

  async deleteTask(id: string): Promise<DeleteResult> {
    const task = await this.taskRepository.findOne({
      where: {
        id: id,
      },
    });

    if (!task) {
      throw new Error(
        "Tarefa não encontrada: Não foi possível apagar esta tarefa"
      );
    }

    return this.taskRepository.delete(id);
  }
}
