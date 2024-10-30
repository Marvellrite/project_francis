import { NextFunction, Request, Response } from "express";
import { get } from "lodash";
import { verifyJwt } from "../utils/jwt.utils";
import { reIssueAccessToken } from "../services/session.service";

export const deserializeUser = (req: Request, res: Response, next: NextFunction)=>{
    let accessToken = get(req, "cookies.accessToken");
    const refreshToken = get(req, "cookies.refreshToken");

    if(!accessToken) return next();

    const { decoded, expired } = verifyJwt(accessToken);
    if(decoded){
        res.locals.userID = decoded;
        return next()
    }

    if(!(expired && refreshToken))
        return next();

    accessToken = reIssueAccessToken(refreshToken);
    res.locals.userID = verifyJwt(accessToken).decoded;
    next();
}