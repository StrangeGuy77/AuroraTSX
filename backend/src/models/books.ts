import { Schema, model, Document } from "mongoose";

interface iBook extends Document {
  title: string;
  description: string;
  author: string;
  price: number;
  extension?: string;
  weight?: number;
  publisher?: string;
  publishingYear?: string;
  categories?: [];
  filename: string;
  views?: number;
  likes?: number;
  timesDownloaded?: number;
  userUploaderId: string;
  userUploaderName: string;
}

const bookSchema: Schema = new Schema({
  title: { type: String },
  description: { type: String },
  author: { type: String },
  price: { type: Number, default: 0 },
  extension: { type: String, default: ".pdf" },
  weight: { type: Number, default: 0 },
  publisher: { type: String, default: "" },
  publisherYear: { type: Date, default: Date.now },
  writingYear: { type: Date, default: Date.now },
  categories: { type: Array, default: [] },
  filename: { type: String },
  views: { type: Number, default: 0 },
  likes: { type: Number, default: 0 },
  timesDownloaded: { type: Number, default: 0 },
  userUploaderId: { type: Number, default: 0 },
  userUploaderName: { type: String, default: "defaultUsername" },
  timestamp: { type: Date, default: Date.now }
});

export default model<iBook>("book", bookSchema);
