import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <>
            <Navbar bg="dark" variant="dark" sticky="top">
                <Container>
                    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link as={Link} to="/home">Home</Nav.Link>
                        <Nav.Link as={Link} to="/cabin">Cabin</Nav.Link>
                        <Nav.Link as={Link} to="/ourservices">OurServices</Nav.Link>
                        <Nav.Link as={Link} to="/ecg">ECG-Service</Nav.Link>
                        <Nav.Link as={Link} to="/x-rey">X-rey</Nav.Link>
                        <Nav.Link as={Link} to="/altra">Altra</Nav.Link>
                        <Nav.Link as={Link} to="/cityscan">CityScan</Nav.Link>
                        <div className="login-container">
                        <button>Login</button>
                        <button>Sin in</button>
                        </div>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;