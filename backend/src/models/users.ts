import { Schema, model, Document } from "mongoose";
import bcrypt from "bcryptjs";

export interface iUser extends Document {
  username: string;
  password: string;
  user_email: string;
  user_activation_key: number;
  user_status: number;
  user_role: number;
  profile_pic?: string;
  name?: string;
  lastname?: string;
  cellphone?: string;
  worksite?: string;
  enterprise?: string;
  country?: string;
  city?: string;
  github?: string;
  webpage?: string;
  show_public_name?: boolean;
  show_public_email?: boolean;
  show_public_location?: boolean;
  followers?: number;
  times_liked?: number;
  times_posted?: number;
  software_collection?: [];
  book_collection?: [];
  payment_collection?: [];
  courses_collection?: [];
  wishlist?: [];
  encryptPassword(password: string): Promise<string>;
  comparePassword(password: string): Promise<boolean>;
}

const userSchema: Schema = new Schema(
  {
    username: { type: String },
    password: { type: String },
    user_email: { type: String },
    user_activation_key: { type: Number },
    user_status: { type: Number },
    user_role: { type: Number },
    profile_pic: { type: String, default: "" },
    name: { type: String, default: "" },
    lastname: { type: String, default: "" },
    cellphone: { type: String, default: "" },
    worksite: { type: String, default: "" },
    enterprise: { type: String, default: "" },
    country: { type: String, default: "" },
    city: { type: String, default: "" },
    github: { type: String, default: "https://www.github.com/" },
    webpage: { type: String, default: "" },
    show_public_name: { type: Boolean, default: false },
    show_public_email: { type: Boolean, default: false },
    show_public_location: { type: Boolean, default: false },
    followers: { type: Number, default: 0 },
    times_liked: { type: Number, default: 0 },
    times_posted: { type: Number, default: 0 },
    software_collection: { type: Array, default: [] },
    book_collection: { type: Array, default: [] },
    payment_collection: { type: Array, default: [] },
    courses_collection: { type: Array, default: [] },
    wishlist: { type: Array, default: [] }
  },
  {
    timestamps: true
  }
);

userSchema.methods.encryptPassword = async (
  password: string
): Promise<string> => {
  const salt = await bcrypt.genSalt(10);
  return bcrypt.hashSync(password, salt);
};

userSchema.methods.validatePassword = async function(
  password: string
): Promise<boolean> {
  return await bcrypt.compare(password, this.password);
};

export default model<iUser>("user", userSchema);
