import {
  Entity,
  Column,
  BaseEntity,
  PrimaryGeneratedColumn,
  JoinColumn,
  ManyToOne
} from "typeorm";
import { User } from "./User";

@Entity("softwares")
export class Software extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column("varchar", {
    length: 255
  })
  title: string;

  @Column("text")
  description: string;

  @Column("varchar", {
    array: true
  })
  devLanguages: [string];

  @Column("varchar", {
    array: true,
    nullable: true
  })
  frameworks: [string];

  @Column("float")
  price: number;

  @Column("varchar", {
    length: 255
  })
  filename: string;

  @Column("varchar", {
    length: 255,
    nullable: true
  })
  userUploaderName: string;

  @Column("varchar", {
    length: 255,
    nullable: true
  })
  imageUrl: string;

  @Column("integer", {
    default: 0
  })
  views: number;

  @Column("integer", {
    default: 0
  })
  likes: number;

  @Column("integer", {
    default: 0
  })
  timesDownloaded: number;

  @ManyToOne(_ => User)
  @JoinColumn()
  user: User;

  @Column("date", {
    default: () => "CURRENT_TIMESTAMP"
  })
  createdAt: string;
}
