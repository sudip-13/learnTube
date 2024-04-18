import mongoose, { Document, Model } from "mongoose";

interface UserDocument extends Document {
    email: string;
    username: string;
    password: string;
    avatar?: string;
    isCreator: boolean;
    channelName?: string;
    channelLogo?: string;
    coverPhoto?: string;
    gender?: string;
    firstname?: string;
    recoveryEmail?: string;
    occupation?: string;
    channelId?: string;
    channelDescription?: string;
    website: { any: string, Facebook: string, Instagram: string, Twitter: string, Github: string, LinkedIn: string, Discord: string }
    address: { country: string; state: string; city: string; pincode: number; phone: number };
    history: any[];
    analytics: { date: Date; watchTime: number }[];

}

const userSchema = new mongoose.Schema<UserDocument>(
    {
        email: {
            type: String,
            required: true,
            unique: true
        },
        username: {
            type: String,
            required: true
        },
        password: {
            type: String,
            required: true
        },
        avatar: {
            type: String,
            required: false
        },
        isCreator: {
            type: Boolean,
            default: false
        },
        channelName: {
            type: String,
            required: false
        },
        channelId: {
            type: String,
            required: false
        },
        channelDescription: {
            type: String,
            required: false
        },
        website:
        {
            any: { type: String },
            Facebook: { type: String },
            Instagram: { type: String },
            Twitter: { type: String },
            Github: { type: String },
            LinkedIn: { type: String },
            Discord: { type: String }
        },

        channelLogo: {
            type: String,
            required: false
        },
        coverPhoto: {
            type: String,
            required: false
        },
        gender: {
            type: String,
            required: false
        },
        firstname: {
            type: String,
            required: false
        },
        recoveryEmail: {
            type: String,
            required: false
        },
        occupation: {
            type: String,
            required: false
        },
        address:
        {
            country: { type: String, },
            state: { type: String, },
            city: { type: String, },
            pincode: { type: Number, },
            phone: { type: Number, },
        },
        history: [mongoose.Schema.Types.Mixed],
        analytics: [
            {
                date: { type: Date, },
                watchTime: { type: Number, }
            }
        ]

    }
);

const UserModel: Model<UserDocument> = mongoose.model<UserDocument>("Users", userSchema);

export { UserModel, UserDocument };