import { TaskDTO } from './TaskDTO';

export class UserDto {
  public id: string;
  public name: string;
  public email: string;
  public password: string;
  public tasks?: TaskDTO[];

  constructor(id: string, name: string, email: string, password: string, tasks?: TaskDTO[]) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.password = password;
    this.tasks = tasks;
  }
}