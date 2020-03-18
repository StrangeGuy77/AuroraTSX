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
  showPublicName: boolean;
  showPublicEmail: boolean;
  showPublicLocation: boolean;
  followers?: string | number;
  timesLiked?: string | number;
  timesPosted?: string | number;
}