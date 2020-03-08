import { Entity, Column, BaseEntity, PrimaryGeneratedColumn } from "typeorm";

@Entity("users")
export class User extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column("varchar", {
    length: 55
  })
  email: string;

  @Column("text")
  password: string;

  @Column("boolean", { default: false })
  confirmed: boolean;

  @Column("date", {
    default: () => "CURRENT_TIMESTAMP"
  })
  createdAt: string;

  @Column("integer", {
    default: 0,
    name: "user_role"
  })
  userRole: string;

  @Column("varchar", {
    length: 50,
    name: "profile_pic",
    default: "default_profile_pic.jpg"
  })
  profilePic: string;

  @Column("varchar", {
    length: 55,
    nullable: true
  })
  name: string;

  @Column("varchar", {
    length: 55,
    nullable: true
  })
  lastname: string;

  @Column("varchar", {
    length: 55,
    nullable: true
  })
  cellphone: string;

  @Column("varchar", {
    length: 55,
    nullable: true
  })
  worksite: string;

  @Column("varchar", {
    length: 55,
    nullable: true
  })
  company: string;

  @Column("varchar", {
    length: 10,
    nullable: true
  })
  country: string;

  @Column("varchar", {
    length: 55,
    nullable: true
  })
  github: string;

  @Column("varchar", {
    length: 55,
    nullable: true
  })
  webpage: string;

  @Column("boolean", {
    name: "show_public_name",
    default: false
  })
  showPublicName: string;

  @Column("boolean", {
    name: "show_public_email",
    default: false
  })
  showPublicEmail: string;

  @Column("boolean", {
    name: "show_public_location",
    default: false
  })
  showPublicLocation: string;

  @Column("integer", {
    default: 0
  })
  followers: number;

  @Column("integer", {
    default: 0,
    name: "times_liked"
  })
  timesLiked: number;

  @Column("integer", {
    default: 0,
    name: "times_posted"
  })
  timesPosted: number;
}
