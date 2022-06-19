import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const NabBar = () => {
  return (
    <>
    <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand ><Link to="/" >Home</Link></Navbar.Brand>
          <Nav className="me-auto">
            <Link to="/counter" >Counter</Link>
            
            <Link to="/AddProducts"> AddProducts</Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  )
}

export default NabBar