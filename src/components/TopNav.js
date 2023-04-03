
import { Row, Col, Nav, Navbar } from 'react-bootstrap';
import { navlinks, logo } from '../data/topnav.js';
import '../styles/topnav.css'

const TopNav = () => {
    return (
        <Row className="nav-container m-0 d-flex g-3 py-4 px-md-4 text-light">
            <Col sm className="nav-element d-flex justify-content-center justify-content-md-start">
                <Navbar.Brand><h5>{logo}</h5></Navbar.Brand>
            </Col>
            <Col sm className="nav-element d-flex justify-content-center">
                {navlinks.slice(0, 4).map((item) => (
                    <Nav.Link href={item} className="navlink text-capitalize mx-3">
                        {item}
                    </Nav.Link>
                ))}
            </Col>
            <Col sm className="nav-element d-flex justify-content-center justify-content-md-end">
                {navlinks.slice(4, 6).map((item) => (
                    <Nav.Link href={item} className="navlink text-capitalize mx-3">
                        {item}
                    </Nav.Link>
                ))}
            </Col>
        </Row>
    );
}

export default TopNav;