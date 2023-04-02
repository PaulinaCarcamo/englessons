
import { Container, Nav, NavDropdown, Navbar } from 'react-bootstrap';
import '../styles/navbar.css'

const TopNav = () => {
    return (
        <Navbar collapseOnSelect expand="lg" className="navbar">
            <Container className="nav-container">
                <Navbar.Brand href="#home">MR AVILA</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#about">About</Nav.Link>
                        <NavDropdown title="Courses" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#">Elementary</NavDropdown.Item>
                            <NavDropdown.Item href="#">Intermediate</NavDropdown.Item>
                            <NavDropdown.Item href="#">Advanced</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#">Technical</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="#contact">Contact</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link href="#join">Join</Nav.Link>
                        <Nav.Link eventKey={2} href="#login">Login</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default TopNav;