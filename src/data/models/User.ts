import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Task } from "./Task";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  public id: string;
  @Column()
  public name: string;
  @Column()
  public email: string;
  @Column()
  public password: string;
  @OneToMany(() => Task, (task) => task.user)
  public tasks: Task[];

  constructor(
    id: string,
    name: string,
    email: string,
    password: string,
    tasks: Task[],
  ) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.password = password;
    this.tasks = tasks;
  }
}
