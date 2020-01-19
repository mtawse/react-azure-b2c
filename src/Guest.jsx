import React from 'react'
import { Link } from 'react-router-dom'
import { AzureAD } from 'react-aad-msal';
import { Button, Container, Header } from 'semantic-ui-react'
import { authProvider } from './authProvider';

const handleLogout = () => {
  authProvider.logout();
}

const Guest = () => (
 <Container>
   <Header as='h1'>Guest Area</Header>
   <Link to="/members">Members</Link>
   <AzureAD provider={authProvider}>
    <Button onClick={() => handleLogout()}>Logout</Button>
   </AzureAD>
 </Container>
)

export default Guest;