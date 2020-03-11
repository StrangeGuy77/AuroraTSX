export interface SoftwareSchema {
    id?: string;
    filename?: string;
    title: string;
    description: string;
    devLanguages?: string | string[];
    price: string;
    user?: IUser;
    frameworks?: string[];
    views?: number;
    imageUrl?: string;
    userUploaderName?: string;
    likes?: number;
    timesDownloaded?: number;
    createdAt?: any;
}