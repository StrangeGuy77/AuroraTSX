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
    likes?: number;
    timesDownloaded?: number;
    createdAt?: any;
}