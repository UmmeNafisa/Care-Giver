import React from 'react';
import { Container, Nav, Navbar, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../../Context/useAuth'
import logo from '../../../Images/logo.jpg'
import './Header.css'

const Header = () => {
    const { user, logOut } = useAuth();
    console.log(user)
    return (
        <>
            <Navbar sticky="top" className="bg-white" collapseOnSelect expand="lg">
                <Container>
                    <Navbar.Brand href="#home">
                        <img
                            src={logo}
                            width="120"
                            height="60"
                            className="d-inline-block align-top"
                            alt="React Bootstrap logo"
                        />
                    </Navbar.Brand >
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse className="justify-content-end" id="responsive-navbar-nav">
                        <Nav.Link as={HashLink} to="/home#home">HOME</Nav.Link>
                        <Nav.Link as={HashLink} to="/home#services">SERVICES</Nav.Link>
                        <Nav.Link as={Link} to="/home">ABOUT</Nav.Link>
                        <Nav.Link as={HashLink} to="/home#careGiver">CARE-GIVERS</Nav.Link>
                        <Nav.Link as={Link} to="/feedbackDetails"> FEEDBACK </Nav.Link>
                        <Nav.Link as={Link} to="/booking"> APPOINMENT </Nav.Link>

                        {user?.email ?
                            <div> <Button onClick={logOut} varient="light" className="btn btn-info text-white fw-bold"> LOGOUT</Button> <Navbar.Text>
                                <Link to="/profile" className="text-decoration-none fw-bold px-2">{user?.displayName}</Link>
                                <img className="user-img" src={user?.photoURL} alt="" />
                            </Navbar.Text> </div> : <Nav.Link as={Link} to="/login"><Button varient="light" className="btn btn-info text-white fw-bold"> LOGIN </Button> </Nav.Link>}

                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;