import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { User } from "./User";

@Entity()
export class Task {
  @PrimaryGeneratedColumn()
  public id: string;

  @Column()
  public title: string;

  @Column()
  public description: string;

  @Column()
  public deadline: string;

  @ManyToOne(() => User, (user) => user.tasks)
  @JoinColumn()
  public user: User;

  constructor(
    id: string,
    title: string,
    description: string,
    deadline: string,
    user: User,
  ) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.deadline = deadline;
    this.user = user;
  }
}
