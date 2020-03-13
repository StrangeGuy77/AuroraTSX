export default interface IUser {
  _id?: any;
  username: string;
  email: string;
  user_registered_date?: string;
  confirmed: boolean;
  user_role: string;
  profile_pic?: string;
  name?: string;
  lastname?: string;
  cellphone?: string | number;
  worksite?: string;
  enterprise?: string;
  country?: string;
  city?: string;
  github?: string;
  webpage?: string;
  show_public_name: boolean;
  show_public_email: boolean;
  show_public_location: boolean;
  followers?: string | number;
  times_liked?: string | number;
  times_posted?: string | number;
}