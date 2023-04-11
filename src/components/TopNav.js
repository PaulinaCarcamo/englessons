
import { Row, Col, Nav, Navbar } from 'react-bootstrap';
import { navlinks, logo } from '../data/topnav.js';
import { Link } from 'react-scroll';
import '../styles/topnav.css'

const TopNav = () => {
    return (
        <Row className="nav-container m-0 d-flex g-3 py-4 px-md-4 text-light">
            <Col sm className="nav-element d-flex justify-content-center justify-content-md-start">
                <h5 className="fw-semibold">{logo}</h5>

            </Col>
            <Col sm className="nav-element d-flex justify-content-center">
                {navlinks.slice(0, 4).map((item) => (
                    // <Link href={item} className="navlink text-capitalize mx-3">
                    //     {item}
                    // </Link>
                    <Link to={item} spy={true} smooth={true} duration={800}
                        className="navlink text-capitalize mx-3 text-light text-decoration-none">
                        {item}
                    </Link>
                ))}
            </Col>
            {/* <Col sm className="nav-element d-flex justify-content-center justify-content-md-end">
                {navlinks.slice(4, 6).map((item) => (
                    <Nav.Link href={item} className="navlink text-capitalize mx-3">
                        {item}
                    </Nav.Link>
                ))}
            </Col> */}

            <Col sm className="nav-element d-flex justify-content-center justify-content-md-end">
                {navlinks.slice(4, 6).map((item) => (
                    // <Nav.Link href={item} className="navlink text-capitalize mx-3">
                    //     {item}
                    // </Nav.Link>

                    <Link to={item} spy={true} smooth={true} duration={800}
                        className="navlink text-capitalize mx-3 text-light text-decoration-none">
                        {item}
                    </Link>
                ))}
            </Col>

        </Row>
    );
}

export default TopNav;