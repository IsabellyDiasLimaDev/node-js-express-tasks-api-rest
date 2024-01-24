import { UserService } from "../../../application/services/UserService";
import { Task } from "../../models/Task";
import { TaskDTO } from "../TaskDTO";
import { UserMapper } from "./UserMapper";

export class TaskMapper {
  public static toDto(task: Task): TaskDTO {
    const { id, title, deadline, description, user } = task;
    return new TaskDTO(title, user.id, id, description, deadline);
  }

  public static async toEntity(taskDto: TaskDTO): Promise<Task> {
    const userService = new UserService();
    const { id, title, deadline, description, userId } = taskDto;

    const userDto = await userService.getUserById(userId);
    const user = await UserMapper.toEntity(userDto);

    return new Task(title, user, description, deadline, id);
  }
}
