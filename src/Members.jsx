import React from 'react'
import { Button, Container, Header } from 'semantic-ui-react'
import { authProvider } from './authProvider'

const handleLogout = () => {
   authProvider.logout();
}

const Members = () => (
  <Container>
    <Header as='h1'>Members Area</Header>
    <Button onClick={() => handleLogout()}>Logout</Button>
  </Container>
)

export default Members;