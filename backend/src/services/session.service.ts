import SessionModel, {SessionDocument, SessionInput}  from "../model/sessions.model";
import { verifyJwt, signJwt } from "../utils/jwt.utils";
import { pick } from "lodash";
import config from "config";
import { FilterQuery, UpdateQuery } from "mongoose";
import UserModel from "../model/user.model";


export const reIssueAccessToken = async (refreshToken:string)=>{
    const { decoded, expired } = verifyJwt(refreshToken);
    if(expired) 
    return (
        {   status: false,
            reason: "Expired JWT"   
        }
    )

    if(!decoded) return(        
        {   status: false,
            reason: "No payload"   
        })
         const  { userID, sessionID } = pick(decoded, ['userID', 'session']) as {userID:string, sessionID: string};
         const session  = await SessionModel.findById(sessionID).lean();

         if(!session || !session.valid) 
        return  (
            {   status: false,
                reason: "Session not vaid or found"   
            }
        ) 
        const accessToken = signJwt({...session, userID }, { expiresIn:config.get<string>("accessTokenTtl") });
        
        return accessToken;
}

export const createSession = async(input: SessionInput)=>{
    const session = await SessionModel.create(input);
    return session;
}

export const findSession = async(query: FilterQuery<SessionDocument>)=>{
    const session = await SessionModel.find(query);
    return session;
}

export const UpdateSession = async(query: FilterQuery<SessionDocument>, update: UpdateQuery<SessionDocument>)=>{
    const session = await SessionModel.find(query, update);
    return session;
}

