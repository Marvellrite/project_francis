import dotenv  from "dotenv";
dotenv.config();

export default {
    googleClientID:'47379038912-68ikhp4jubii1obvhlefv1pfn0khme8p.apps.googleusercontent.com',
    googleClientSecret:'',
    port: 5500,
    host:'http://localhost:5500',
    dbConnectionUri:'',
    googleOauthRedirectUrl:'http://localhost:5500/api/sessions/oauth/google',
    jwtPrivateKey:'',
    jwtPublicKey:'+++++BEGINPUBLICKEY+++++MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAvZkwxvEqhgber2aEyENa4P3X24qj1gE/4T5nJiGgUnLM2SnN4G3SyshvTaY2DYaqryaY2sfES28dTZvp6djE4I70t8vNkjWXx1q7zijA5j5Jy0ZxHkDCgr3alrNLZXe1IIbsxazq2t6fRENdAZy477LKTXLAfwrGbOe1v6jp5ySiUMLhdJP52D87k07YfmcJNjWGV3Kijig2YX27zFO7tlWjWbxhYjcxjCAxm5mMM7upTlWBrcOCCfj9VQTARMutKaawUujoO5GERMzTPjb97tHDY8n9V2609lR4lYYZ9OeYoF0Qwjvr1c038tOHThlOz5c4vWDai4rCpqCLT2mCIQIDAQAB+++++ENDPUBLICKEY++++w==',
    accessTokenTtl:"1y",
    refreshTokenTtl:"15m"
}