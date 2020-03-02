export default interface IUser {
  _id?: any;
  username: string;
  user_email: string;
  user_registered_date?: string;
  user_confirmed: boolean;
  user_role: string;
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
  show_public_name: boolean;
  show_public_email: boolean;
  show_public_location: boolean;
  followers?: string;
  times_liked?: string;
  times_posted?: string;
}
