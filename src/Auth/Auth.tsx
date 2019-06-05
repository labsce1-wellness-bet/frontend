import auth0 from 'auth0-js';

export default class Auth {
    auth0 = new auth0.WebAuth({
        domain: 'akshay-gadkari.auth0.com',
        clientID: 'fX2Ov3PrG67snp7CsUrUFcFE8RN5aglD',
        redirectUri: 'https://wellness-bet.netlify.com/callback',
        responseType: 'token id_token',
        scope: 'openid'
    });

    login() {
        this.auth0.authorize();
    }
}
