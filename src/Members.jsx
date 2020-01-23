import React, { useState, useEffect } from 'react'
import { Button, Container, Header } from 'semantic-ui-react'
import { authProvider } from './authProvider'
import user from './user';

const handleLogout = () => {
  authProvider.logout();
}

const Members = () => {
  const [currentUser, setCurrentUser] = useState(null);
  useEffect(() => {
    const fetchCurrentUser = async () => {
      const tokenUser = await user.getUser();
      setCurrentUser(tokenUser);
    };

    fetchCurrentUser();
  }, []);
  return (
    <Container>
      <Header as='h1'>Members Area { currentUser && currentUser.name }</Header>
      <Button onClick={() => handleLogout()}>Logout</Button>
    </Container>
  );
}

export default Members;