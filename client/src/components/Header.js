import React from 'react';
import { Container, Row, Col, Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";
import { BsHouseDoorFill, BsSearch } from "react-icons/bs";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.css';

const Header = ({ companyName, userName }) => {
  return (
    <Navbar className='headerBackground'>
      <Container>
        <Navbar.Brand className='LogoName'>Media</Navbar.Brand>

        {/* Search Bar in the Center */}
        <Form className="d-flex">
          <FormControl type="text" placeholder="Search..." className='searchbarSize'/>
          <Button className='buttonSize outline-none'>
            <BsSearch style={{color:'white'}}/>
          </Button>
        </Form>

        {/* Home Icon and User Name on the Right */}
        <Nav className="ms-auto ">
          <Nav.Link href="#">
            <BsHouseDoorFill size={20} color='white' className='HomeLogo'/>
          </Nav.Link>
          <Nav.Link className='text-white nameBackground'>Muhammad Faraz Baig</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
