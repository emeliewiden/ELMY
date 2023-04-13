import { useState } from 'react';
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { Link } from 'react-router-dom'

function NavBar() {
    const [expanded, setExpanded] = useState(false);

    const toggleNavbar = () => {
        setExpanded(!expanded);
    };

    const handleLinkClick = () => {
        setExpanded(false);
    };

    return (
        <Navbar bg="Light" expand="lg" expanded={expanded}>
            <Container>
                <Navbar.Brand className="brand" to="/">
                    ELMY
                </Navbar.Brand>
                <Navbar.Toggle
                    className="toggle"
                    aria-controls="basic-navbar-nav"
                    onClick={toggleNavbar}
                />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link to="/">
                            <Link className="navLink" to="/" onClick={handleLinkClick}>
                                HOME
                            </Link>
                        </Nav.Link>
                        <Nav.Link to="/menu">
                            <Link className="navLink" to="/menu" onClick={handleLinkClick}>
                                MENU
                            </Link>
                        </Nav.Link>
                        <Nav.Link to="/booking">
                            <Link className="navLink" to="/booking" onClick={handleLinkClick}>
                                BOOK
                            </Link>
                        </Nav.Link>
                        <Nav.Link to="/about">
                            <Link className="navLink" to="/about" onClick={handleLinkClick}>
                                ABOUT
                            </Link>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar;
