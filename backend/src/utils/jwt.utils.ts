import { verify, sign, SignOptions } from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();
import config from "config";

let privateKey = config.get<string>("jwtPrivateKey");
let publicKey = config.get<string>("jwtPublicKey");

export const signJwt = (
    object: Object, 
    options: SignOptions
)=>{
    privateKey = Buffer.from(privateKey, "base64").toString("utf-8");

    return sign(object, privateKey, { ...(options && options), algorithm:"RS256" });
}


export const verifyJwt = (
    token: string, 
)=>{
    publicKey = Buffer.from(publicKey, "base64").toString("utf-8");

    try {
        const decoded = verify(token, publicKey);
        return {
            valid: true,
            expired: false,
            decoded
        }
    }
    catch(err){
        return {
            valid: false,
            expired: err==="jwt expired",
            decoded: null
        }
    }
}