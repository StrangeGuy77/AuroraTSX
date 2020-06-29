import { Entity, Column, JoinColumn, ManyToOne } from "typeorm";
import { User } from "./User";
import { Base } from "./utils/base.model";

@Entity("comments")
export class Comment extends Base {
  @Column("uuid")
  postId: string;

  @Column("text")
  content: string;

  @Column("date", {
    default: () => "CURRENT_TIMESTAMP",
  })
  timestamp: string;

  @ManyToOne((_) => User)
  @JoinColumn()
  user: User;
}
