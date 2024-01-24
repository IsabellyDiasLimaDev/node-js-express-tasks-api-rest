import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Task } from "./Task";

@Entity("tbl_user")
export class User {
  @PrimaryGeneratedColumn("uuid")
  public id: string;
  @Column({
    name: "user_name",
    type: "varchar",
    length: 255
  })
  public name: string;
    @Column({
    name: "user_email",
    type: "varchar",
    length: 255
  })
  public email: string;
    @Column({
    name: "user_password",
    type: "varchar",
    length: 255
  })
  public password: string;
  @OneToMany(() => Task, (task) => task.user)
  public tasks?: Task[];

  constructor(
    id: string,
    name: string,
    email: string,
    password: string,
    tasks?: Task[],
  ) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.password = password;
    this.tasks = tasks;
  }
}
