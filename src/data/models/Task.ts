import {
  BeforeInsert,
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryColumn
} from "typeorm";
import { v4 as uuidv4 } from "uuid";
import { User } from "./User";

@Entity("tbl_task")
export class Task {
  @PrimaryColumn({
    name: "uuid",
    type: "varchar",
    length: 36
  })
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

  @BeforeInsert()
  generateId() {
    if (!this.id) {
      this.id = uuidv4();
    }
  }

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
