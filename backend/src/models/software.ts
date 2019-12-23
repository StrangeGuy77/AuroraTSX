import { Schema, model, Document } from "mongoose";

export interface iSoft extends Document {
  title: string;
  description: string;
  mainLanguage: string;
  price: number;
  filename: string;
  views?: number;
  likes?: number;
  comments?: [];
  timesDownloaded?: number;
  userUploaderId?: string;
  userUploaderName?: string;
}

const softwareSchema: Schema = new Schema(
  {
    title: { type: String },
    description: { type: String },
    mainLanguage: { type: String },
    price: { type: Number, default: 0 },
    filename: { type: String },
    views: { type: Number, default: 0 },
    likes: { type: Number, default: 0 },
    comments: {
      type: Array,
      default: []
    },
    timesDownloaded: { type: Number, default: 0 },
    userUploaderId: { type: Number, default: 0 },
    userUploaderName: { type: String, default: "defaultUsername" }
  },
  {
    timestamps: true
  }
);

export default model<iSoft>("SoftwareSchema", softwareSchema);
