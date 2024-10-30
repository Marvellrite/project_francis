import {Document, Schema, model, } from "mongoose";
import { UserDocument } from "./user.model";
import { boolean } from "zod";


export interface SessionInput {
    userAgent: string,
    userID: UserDocument["_id"]
}

export interface SessionDocument extends SessionInput, Document{
    valid: boolean,
    createdAt: Date,
    updatedAt: Date
}

const sessionSchema = new Schema(    
    {
    userID:{
        type: Schema.Types.ObjectId,
        required: [true, "Name is required"],
        ref: "User"    
    },
    userAgent:{
        type: String,
        defualt: ''},
    valid:{type:Boolean, default:true}
    },

    {
        timestamps: true
    }

)


const SessionModel = model<SessionDocument>('Session', sessionSchema);

export default SessionModel;