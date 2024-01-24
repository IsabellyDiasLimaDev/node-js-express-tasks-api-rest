import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { User } from "./User";

@Entity("tbl_task")
export class Task {
  @PrimaryGeneratedColumn("uuid")
  public id?: string;

  @Column({
    name: "task_title",
    type: "varchar",
    length: 255,
  })
  public title: string;

  @Column({
    name: "task_description",
    type: "text"
  })
  public description?: string;

  @Column({
    name: "task_due_date",
    type: "date"
  })
  public deadline?: Date;

  @ManyToOne(() => User, (user) => user.tasks)
  @JoinColumn({
    name: "user_id"
  })
  public user: User;

  constructor(
    title: string,
    user: User,
    description?: string,
    deadline?: Date,
    id?: string,
  ) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.deadline = deadline;
    this.user = user;
  }
}
