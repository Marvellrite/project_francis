const anchor = document.querySelector(".GoogleOAuth");

const getGoogleOauthUrl = ()=>{
    const rootURL = 'https://accounts.google.com/o/oauth2/v2/auth';

    const options = {
        redirect_uri: 'http://localhost:5500/auth/Oauth2/google',
        client_id: '47379038912-68ikhp4jubii1obvhlefv1pfn0khme8p.apps.googleusercontent.com',
        access_type: "offline",
        response_type: "code",
        prompt: "consent",
        scope: [
        "https://www.googleapis.com/auth/userinfo.profile",
        "https://www.googleapis.com/auth/userinfo.email"
        ].join(" "),
    }

    const qs = new URLSearchParams(options);
    return rootURL+'?'+qs.toString();
}


anchor?.setAttribute("href", getGoogleOauthUrl());