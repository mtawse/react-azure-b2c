import jwt from 'jsonwebtoken';
import { authProvider } from './authProvider';

const decode = (token) => jwt.decode(token);

const getIdToken = async () => {
  const token = await authProvider.getIdToken();
  return token.idToken.rawIdToken;
};

const token = {
  decode,
  getIdToken,
};

export default token;
