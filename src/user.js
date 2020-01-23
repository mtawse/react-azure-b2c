import token from './token';

const setUser = (idToken) => ({
  firstName: idToken.given_name,
  lastName: idToken.family_name,
  name: `${idToken.given_name} ${idToken.family_name}`,
});

const getUser = async () => {
  const idToken = await token.getIdToken();
  return setUser(token.decode(idToken));
};

const user = {
  getUser,
};

export default user;