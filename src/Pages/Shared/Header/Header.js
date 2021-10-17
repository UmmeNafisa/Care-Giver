import React from 'react';
import { Container, Nav, Navbar, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import logo from '../../../Images/logo.jpg'

const Header = () => {
    return (
        <>
            <Navbar sticky="top">
                <Container>
                    <Navbar.Brand href="#home">
                        <img
                            src={logo}
                            width="120"
                            height="60"
                            className="d-inline-block align-top"
                            alt="React Bootstrap logo"
                        />
                    </Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link as={HashLink} to="/home#home">HOME</Nav.Link>
                        <Nav.Link as={HashLink} to="/home#services">SERVICES</Nav.Link>
                        <Nav.Link as={HashLink} to="/home#experts">ABOUT</Nav.Link>
                        <button className="btn btn-info text-white fw-bold">BOOK AN APPOINMENT</button>
                        {/* {users?.email ? <Button onClick={logOut} varient="light"> Logout</Button> : <Nav.Link as={Link} to="/login">Login  </Nav.Link>}
                        <Navbar.Text>
                            Signed in as: <a href="#login">{users?.displayName}</a>
                        </Navbar.Text> */}
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;