import {Request, Response} from "express";
import { createSession, findSession } from "../services/session.service";
import config from "config"
import { validatePassword } from "../services/user.services";
import { signJwt } from "../utils/jwt.utils";


export const createSessionHandler = async (req:Request, res:Response) =>{
    try{

        const user = await validatePassword(req.body);
        if(!user) return res.status(401).send("Invaiid Credentials")
        const userID = user._id;
        // const userAgent = get(req, "user-agent") || ""
        const userAgent = req.get("user-agent") || ""

        const session = await createSession( {userID, userAgent});
        const sessionID = session._id;

        const accessToken = signJwt({ userID, sessionID }, { expiresIn: config.get<string>("accessTokenTtl")});
        const refreshToken = signJwt({ userID, sessionID }, { expiresIn: config.get<string>("refreshTokenTtl")});

        res.send({accessToken, refreshToken}).status(200);
    } 
    catch(err){
        res.send("Internal Server Error").status(500);
    }
}

export const getSessionHandler = async(req:Request, res:Response)=>{
    try{
        const userID = res.locals.userID;
        const session = await findSession(userID);
        if(!session) res.send("Session Not Found").status(404);
    }
    catch(err){
        res.send("Internal Server Error").status(500);
    }
}
