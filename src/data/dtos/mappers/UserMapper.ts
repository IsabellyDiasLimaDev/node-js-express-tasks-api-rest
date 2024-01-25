import { User } from "../../models/User";
import { UserDto } from "../UserDTO";
import { TaskMapper } from "./TaskMapper";

export class UserMapper {
  public static toDto(user: User): UserDto {
    const { id, name, email, password, tasks } = user;
    const tasksDTOs = tasks?.map((task) => TaskMapper.toDto(task));

    return new UserDto(id, name, email, password, tasksDTOs);
  }

  public static async toEntity(userDTO: UserDto): Promise<User> {
    const { id, name, email, password, tasks = [] } = userDTO;

    const tasksEntity = await Promise.all(
      tasks.map((task) => TaskMapper.toEntity(task))
    );

    return new User(id, name, email, password, tasksEntity);
  }
}
