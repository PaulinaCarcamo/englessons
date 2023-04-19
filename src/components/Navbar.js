import { Row, Col } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { ShareFill } from 'react-bootstrap-icons';
import { Link } from 'react-scroll';
import { navlinks, logo } from '../data/navbar.js';
import ModalMe from './ModalMe.js';
import ModalMs from './ModalMs.js';
import '../styles/navbar.css'

const Navbar = () => {
    return (
        <Row className="nav-container m-0 d-flex g-3 py-4 px-md-4 text-light">
            <Col sm className="nav-element d-flex justify-content-center justify-content-md-start">
                {logo.map((item) => (
                    <div className="d-flex">
                        <h5 className="fw-semibold nav-link disabled fs-5">{item.logo}</h5>
                        <NavLink to={item.url} target="_blank">
                            <h5 className="ms-1 fs-6 text-light"><ShareFill /></h5>
                        </NavLink>
                    </div>
                ))}
            </Col>

            <Col sm className="nav-element d-flex justify-content-center">
                {navlinks.map((item) => (
                    <Link to={item} spy={true} smooth={true}
                        className="navlink text-capitalize mx-3 text-light text-decoration-none">
                        {item}
                    </Link>
                ))}
            </Col>

            <Col sm className="nav-element d-flex justify-content-center justify-content-md-end">
                <ModalMs />
                <ModalMe />
            </Col>
        </Row>
    );
}

export default Navbar;