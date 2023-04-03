
import { Container, Nav, Navbar } from 'react-bootstrap';

import { topnav, logo } from '../data/topnav';
import '../styles/navbar.css'

const TopNav = () => {
    return (
        <Navbar collapseOnSelect expand="lg" className="navbar  ">
            <Container className="nav-container ">
                <Navbar.Brand href="home">{logo}</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" className="nav-toggle" />
                <Navbar.Collapse id="responsive-navbar-nav" className="nav-collapse">
                    <Nav className="me-auto nav-items">
                        {
                            topnav.map((item) => (
                                <Nav.Link href={item}>
                                    {item.charAt(0).toUpperCase() + item.slice(1)}
                                </Nav.Link>
                            ))
                        }
                        {/* <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#about">About</Nav.Link> */}
                        {/* <NavDropdown title="Courses" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#">Elementary</NavDropdown.Item>
                            <NavDropdown.Item href="#">Intermediate</NavDropdown.Item>
                            <NavDropdown.Item href="#">Advanced</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#">Technical</NavDropdown.Item>
                        </NavDropdown> */}
                    </Nav>
                    <Nav>
                        <Nav.Link href="join">Join</Nav.Link>
                        <Nav.Link eventKey={2} href="login">Login</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default TopNav;