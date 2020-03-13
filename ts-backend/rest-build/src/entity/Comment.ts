import {
  Entity,
  BaseEntity,
  Column,
  PrimaryGeneratedColumn,
  JoinColumn,
  ManyToOne
} from "typeorm";
import { User } from "./User";

@Entity("comments")
export class Comment extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column("uuid")
  postId: string;

  @Column("text")
  content: string;

  @Column("date", {
    default: () => "CURRENT_TIMESTAMP"
  })
  timestamp: string;

  @ManyToOne(_ => User)
  @JoinColumn()
  user: User;
}
