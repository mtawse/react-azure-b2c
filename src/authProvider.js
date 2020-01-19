import { MsalAuthProvider, LoginType } from 'react-aad-msal';

// Msal Configurations
const config = {
  auth: {
    authority: process.env.REACT_APP_B2C_URL,
    clientId: process.env.REACT_APP_CLIENT_ID,
    validateAuthority: false,
    postLogoutRedirectUri: `${process.env.REACT_APP_APP_URL}/logout`
  },
  cache: {
    cacheLocation: "sessionStorage",
    storeAuthStateInCookie: false
  }
};

// Authentication Parameters
const authenticationParameters = {
  scopes: [process.env.REACT_APP_CLIENT_ID]
}

// Options
const options = {
    loginType: LoginType.Redirect
}

export const authProvider = new MsalAuthProvider(config, authenticationParameters, options)